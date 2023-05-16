const { Router } = require('express');
const userRoutes = require("./userRoutes");
const postRoutes = require('./postRoutes');
const typeRoutes = require('./typesRoutes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const routes = Router();

routes.use('/pokemons', userRoutes);

routes.use('/pokemons', postRoutes);

routes.use('/type', typeRoutes);
    
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = routes;
