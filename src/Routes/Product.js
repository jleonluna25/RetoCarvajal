const { Router } = require('express');
const router = Router();

const { getProducts, createProduct, getProductById, updateProduct, deleteProduct } = require('../Controllers/ProductController');
 

router.route('/')
  .get(getProducts)
  .post(createProduct)

router.route('/:id')   
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct)

    
module.exports = router;

/*app.get('/wishlist', controller.getProducts);
app.get('/wishlist/getone/:id', controller.getProductById);
app.post('/wishlist/create/', controller.createProduct);
app.put('/wishlist/update/:id', controller.updateProduct);
app.delete('/wishlist/delete/:id', controller.deleteProduct);*/