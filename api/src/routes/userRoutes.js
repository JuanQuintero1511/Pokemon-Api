const { Router } = require("express");

const userRoutes = Router();

userRoutes.get ('./pokemons', (req, res) => {
    res.send('Esto es una prueba');
})

module.exports = userRoutes;