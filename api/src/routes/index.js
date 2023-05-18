const { Router } = require('express');
const userRoutes = require("./userRoutes.js");
const postRoutes = require("./postRoutes.js");
const typeRoutes = require('./typesRoutes.js');

const routes = Router();

routes.use('/pokemons', userRoutes);
routes.use('/pokemons', postRoutes);
routes.use('/type', typeRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = routes;