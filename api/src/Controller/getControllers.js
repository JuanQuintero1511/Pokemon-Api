const axios = require ("axios");
const { Pokemon } = require('../db.js');

const cleanArray = (arr) => 
    arr.map((elem) => {
        return {
            id: elem.id,
            name: elem.name,
            hp: elem.hp,
            atack: elem.atack,
            defending: elem.defending,
            img: elem.img,
            created: false
        };
    });
    
const getPokemonId = async (id, source) => {
    const pokemonid = source === "api" ?
    (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
    .data : 
    await Pokemon.findByPk(id);

    return pokemonid;
};

const getAllPokemons = async () => {
    const databasePokemons = await Pokemon.findAll()
    const apiPokemonsRaw = ( await axios.get (`https://pokeapi.co/api/v2/pokemon`)) .data

    const apiPokemons = cleanArray (apiPokemonsRaw);

    return [...databasePokemons, ...apiPokemons];
}

const searchPokemonByName = async (name) => {
    const databasePokemons = await Pokemon.findAll({ where: { name:name } });
    const apiPokemonsRaw = ( await axios.get (`https://pokeapi.co/api/v2/pokemon/{name}`)) .data
    const apiPokemons = cleanArray (apiPokemonsRaw);
    const filterApi = apiPokemons.filter( (pokemon) => pokemon.name = name );
    return [...filterApi, ...databasePokemons];
}

module.exports = { getPokemonId, getAllPokemons, searchPokemonByName };