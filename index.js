
// mostro la creació d'un servidor fent servir el framework Express de Node JS

// importa app
const app = require("./app")

// crea una ruta get a / qui respon el missatge 'Hola des...'
app.get('/', (req, res) => {
    
    res.send('Hola des del servidor !');

});

const port = 3100;

// activa el servidor al port especificat (3100)
app.listen(port,() => {
    console.log(`Servidor express al port ${port}`);
});