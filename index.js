// importa app
const app = require("./app")

// crea una ruta get a / qui respon el missatge 'Hola des...'
app.get('/', (req, res) => {
    
    res.send('Hola des del servidor !');

});

const port = 3100;

// activa el servidor al port especificat
app.listen(port,() => {
    console.log(`Servidor express al port ${port}`);
});