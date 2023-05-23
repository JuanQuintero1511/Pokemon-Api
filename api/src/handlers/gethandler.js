const { getPokemonById, searchPokemonByName, getAllPokemons } = require("../Controller/getControllers");



const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;

  const results = name ? await searchPokemonByName(name) : await getAllPokemons()

  res.status(200).json(results)
}
  

const getIdPokemonsHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const pokemon = await getPokemonById (id, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
    
}



const getNamePokemonsHandler = async (req, res) => {
    
}

module.exports = {
    getPokemonsHandler,
    getIdPokemonsHandler,
    getNamePokemonsHandler

}