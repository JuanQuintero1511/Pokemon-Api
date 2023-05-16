const { Router } = require("express");

const userRoutes = Router();



const pokemon = []
userRoutes.get ('/pokemons', (req, res) => {
    console.log(req.body);
    let id = 1;
    const { name, hp, atack, defending, img } = req.body;

    const newPokemon = {
        id: id++,
        name,
        hp,
        atack,
        defending, 
        img
    }
    pokemon.push(newPokemon)
    
})

userRoutes.get (':idPokemon', (req, res) => {
    res.send('Esto es una prueba');
})

userRoutes.get ('/name?="..."', (req, res) => {
    res.send('Esto es una prueba');
})

module.exports = userRoutes;