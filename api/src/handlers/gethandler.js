const getPokemonsHandler = (req, res) => {
    res.send('NIY: ESTA RUTA TRAE A TODOS LOS POKEMONS')
}

const getIdPokemonsHandler = (req, res) => {
    const {id} = req.params;
    res.send(`Va a enviar el detalle del pokemon de ID ${id}`)
}

const getNamePokemonsHandler = (req, res) => {
    const { name } = req.query;
    if(name !== undefined){
        res.send(`Quiero buscar todos los que se llamen ${name}`)
    } else {
        res.send("Quiero enviar todos los pokemons")
    }
}

module.exports = {
    getPokemonsHandler,
    getIdPokemonsHandler,
    getNamePokemonsHandler
}