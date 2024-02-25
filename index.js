
// importo app
const app = require("./app")

// creo la ruta get a /
app.get('/', (req, res) => {
    
    res.send('Hola des del servidor !');

});

const port = 3100;

// activa el servidor al port especificat (3100)
app.listen(port,() => {
    console.log(`Servidor Express al port ${port}`);
});