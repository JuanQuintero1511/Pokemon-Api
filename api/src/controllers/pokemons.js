const axios = require('axios');
const { Pokemon,Type } = require('../db');

let pokemons = []

const getAllPokemonsApi = async (req,res)=>{
  try {
    if(pokemons.length) return pokemons

    const pokemonsArr1 = await axios.get(`https://pokeapi.co/api/v2/pokemon`).then(({data})=> data.results);
    
    const pokemonsArr = [...pokemonsArr1]
    const pokemonsURL = pokemonsArr.map(p => axios.get(p.url));
    
    const pokemonsResult = await Promise.all(pokemonsURL).then(
      (pokeRes) => {
        pokemons = pokeRes.map(pokemon => {
          return {
            id:pokemon.data.id,
            name:pokemon.data.name,
            img:pokemon.data.sprites.other.home.front_default,
            hp:pokemon.data.stats[0].base_stat,
            attack:pokemon.data.stats[1].base_stat,
            defense:pokemon.data.stats[2].base_stat,
            speed:pokemon.data.stats[5].base_stat,
            height:pokemon.data.height | null,
            weight:pokemon.data.weight | null,
            type:pokemon.data.types.map((t)=>{
              return{name:t.type.name};
            })
          }
        });
        return pokemons
      }
    )

    return pokemonsResult;
  } catch (error) {
    return res.status(404).json({message:'no se pudieron obtener los pokemons de la api!'})
  }
}

const getAllPokemonsDb = async (req,res)=>{
    try {
      
      const pokeDb = await Pokemon.findAll({include:Type});

      if(!pokeDb) throw Error('Aun no se han creado Pokemons!!')

      return pokeDb;
    } catch (error) {
      return res.status(404).json({message:error.message})
    }
  }



module.exports = {
  getPokemons: async (req,res)=>{
    try {
      const fromDb = await getAllPokemonsDb();
      const fromApi = await getAllPokemonsApi();
      const completeData = [...fromDb, ...fromApi]
      return res.status(200).json(completeData)
    } catch (error) {
      return res.status(400).json({message:error.message})
  }
  },
  getPokemonById: async (req,res)=>{
    const { idPokemon } = req.params;
    try {
      if(isNaN(idPokemon)){
        let pokeById = await Pokemon.findByPk(idPokemon,{include:Type});

        if(!pokeById) throw Error('No se encontraron pokemons con ese Id!');

        return res.status(200).json(pokeById)
      }

      let pokeById = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then(({data}) => {
        return {
          id:data.id,
          name:data.name,
          img:data.sprites.other.home.front_default,
          hp:data.stats[0].base_stat,
          attack:data.stats[1].base_stat,
          defense:data.stats[2].base_stat,
          speed:data.stats[5].base_stat,
          height:data.height | null,
          weight:data.weight | null,
          type:data.types.map((t)=>{
            return{name:t.type.name};
          })
        }
      });
      if(pokeById){
        return res.status(200).json(pokeById)
      }
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  createPokemon: async (req,res)=>{
    let { name,img,hp,attack,defense,speed,height,weight,type } = req.body;
    name = name.toLowerCase();//todo cambia a minuscula
    try {
      if(!name||!img||!hp||!attack||!defense) throw Error('Los datos estan incompletos!');
      
      const pokemon = await Pokemon.create({name,img,hp,attack,defense,speed,height,weight});

      const dbTypes = await Type.findAll({ 
        where:{name:type},
      });
      await pokemon.addTypes(dbTypes);
      
      return res.status(200).json({ok:true,message:'El pokemon ha sido creado con exito!'});
    } catch (error) {
      return res.status(200).json({ok:false,message:error.message});
    }
  },
  getPokemonByName: async (req,res)=>{

    let { name } = req.query;

    if(!name) throw Error('Debes escribir un Name!');

    name = name.toLowerCase();

    try {
      
      const pokeFromDb = await Pokemon.findOne({include:Type},{where:{name:name}});
      if(pokeFromDb === null||pokeFromDb.dataValues.name !== name){
        const pokeFromApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(({data})=>{
          return{
            id:data.id,
            name:data.name,
            img:data.sprites.other.home.front_default,
            hp:data.stats[0].base_stat,
            attack:data.stats[1].base_stat,
            defense:data.stats[2].base_stat,
            speed:data.stats[5].base_stat,
            height:data.height | null,
            weight:data.weight | null,
            type:data.types.map((t)=>{
              return{name:t.type.name};
            })
          }
        });
        if(!pokeFromApi) throw Error('No se encontro el Pokemon!!')
        return res.status(201).json(pokeFromApi)
      }
      return res.status(200).json(pokeFromDb)
    } catch (error) {
      return res.status(404).json({message:error.message})
    }
  },
  deletePokemon: async (req,res)=>{
    const {idPokemon} = req.params;
    try {
      if(idPokemon.length > 4){ 
        await Pokemon.destroy({
          where:{
            id:idPokemon
        }
        }); 
        return res.status(200).json({message:'El pokemon fue borrado satisfactoriamente!'})
      }
      pokemons = await pokemons.filter(p => p.id !== +idPokemon)
       
      return res.status(204).json({message:'El pokemon fue borrado satisfactoriamente!!'})
    } catch (error) {
      return res.status(404).json({error:error.message})
    }
  }
}