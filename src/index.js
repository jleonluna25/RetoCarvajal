const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const controller= require('./queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/wishlist', controller.getProducts);
app.get('/wishlist/getone/:id', controller.getProductById);
app.post('/wishlist/create/', controller.createProduct);
app.put('/wishlist/update/:id', controller.updateProduct);
app.delete('/wishlist/delete/:id', controller.deleteProduct);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

