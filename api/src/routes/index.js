const {Router} = require('express');
const router = Router();
// Importar todos los routers;
const pokemons = require('./pokemon');
const types = require('./types');
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/',pokemons);
router.use('/',types);

module.exports = router;