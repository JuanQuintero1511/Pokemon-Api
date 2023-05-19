const { Router } = require('express');
const userRoutes = require("./userRoutes.js");
const postRoutes = require("./postRoutes.js");
const typeRoutes = require('./typesRoutes.js');

const routes = Router();

routes.use('/pokemon', userRoutes);
routes.use('/pokemon', postRoutes);
routes.use('/type', typeRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = routes;