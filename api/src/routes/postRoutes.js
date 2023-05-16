const { Router } = require("express");

const postRoutes = Router();

postRoutes.post ('/pokemons', (req, res) => {
    res.send('Esto es una prueba');
})

module.exports = (postRoutes);
