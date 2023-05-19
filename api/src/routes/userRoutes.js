const { Router } = require("express");
const { getPokemonsHandler, getIdPokemonsHandler, getNamePokemonsHandler } = require("../handlers/gethandler")

const userRoutes = Router();

userRoutes.get ('/pokemon', getPokemonsHandler);

userRoutes.get ('/:idPokemon', getIdPokemonsHandler);

userRoutes.get ('/name?="..."', getNamePokemonsHandler);

module.exports = userRoutes;