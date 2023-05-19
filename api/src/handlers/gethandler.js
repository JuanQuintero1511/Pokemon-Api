const { getPokemonId, searchPokemonByName, getAllPokemons } = require("../Controller/getControllers");



const getPokemonsHandler = (req, res) => {
    res.send('NIY: ESTA RUTA TRAE A TODOS LOS POKEMONS')
}

const getIdPokemonsHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const pokemonid = await getPokemonId (id, source);
        res.status(200).json(pokemonid);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
    
}

const getNamePokemonsHandler = async (req, res) => {
    const { name } = req.query;

    const results = name ? await searchPokemonByName(name): await getAllPokemons();
    res.status(200).json(results);
}

module.exports = {
    getPokemonsHandler,
    getIdPokemonsHandler,
    getNamePokemonsHandler
}