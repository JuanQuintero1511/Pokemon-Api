const { Router } = require("express");

const typeRoutes = Router();

typeRoutes.get ('/types', (req, res) => {
    res.send('Aqui van los tipos');
})

module.exports = (typeRoutes);