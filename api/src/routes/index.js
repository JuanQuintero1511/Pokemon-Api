const { Router } = require('express');
const userRoutes = require("./userRoutes");
const postRoutes = require('./postRoutes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/users', userRoutes);

router.use('/posts', postRoutes);
    
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
