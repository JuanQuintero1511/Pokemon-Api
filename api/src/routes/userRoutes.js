const { Router } = require("express");

const userRoutes = Router();

userRoutes.get ('/pokemons', (req, res) => {
    res.send('Esto es una prueba');
})

userRoutes.get (':idPokemon', (req, res) => {
    res.send('Esto es una prueba');
})

userRoutes.get ('/name?="..."', (req, res) => {
    res.send('Esto es una prueba');
})

module.exports = userRoutes;