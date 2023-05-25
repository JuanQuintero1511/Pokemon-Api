const {Router} = require('express');
const router = Router();
const { getPokemons,getPokemonById,createPokemon, getPokemonByName,deletePokemon } = require('../controllers/pokemons.js')

router.get('/pokemons',getPokemons);
router.get('/pokemon/:idPokemon',getPokemonById);
router.delete('/pokemon/:idPokemon',deletePokemon);
router.get('/pokemon',getPokemonByName);
router.post('/pokemon/create',createPokemon);

module.exports = router;