const { Pokemon } = require('../db.js');

const createPokemon = async ( name, hp, atack, defending, img ) => {
    await Pokemon.create({ name, hp, atack, defending, img })  
}


module.exports = { createPokemon };