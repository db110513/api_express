
// importo app
const app = require("./app");

// creo la ruta get a /
app.get('/', (req, res) => {
    
    // missatge que mostra el servidor com a resposta a una petició
    res.send('Hola des del servidor !');

});

const port = 3100;

// activa el servidor al port especificat (3100)
app.listen(port,() => {

    // missatge que es mostra per consola quan es crea el servidor
    console.log(`Servidor Express al port ${port}`);
});


//Executo el servidor > node .\index.js (nom de l'arxiu que conté les rutes del servidor)

// aturo servidor fent click a > ctrl + C