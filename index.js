const app = require("./app")

app.get('/', (req, res) => {
    
    res.send('Hello from the server !');

});

app.listen(3000,() => {
    console.log("Express server running at 3000");
});