const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors()); 5093


const productsRoutes = require('./routes/products');

// Definindo a rota produto
app.use('/routes/products', productsRoutes);

app.listen(4567, () => {
    console.log("App rodando.");
});
