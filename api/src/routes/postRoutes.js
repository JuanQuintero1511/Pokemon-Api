const { Router } = require("express");
const { createPokemon } = require("../Controller/postController");

const postRoutes = Router();

postRoutes.post ('/pokemons', async (req, res) => {
    try {
        const { name, hp, atack, defending, img } = req.body;
        const newPokemon = await createPokemon(name, hp, atack, defending, img);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = postRoutes;
