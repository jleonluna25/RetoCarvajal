import pool from '../connection';

const ProductController = {};

const Product = require('../Model/Product');

ProductController.getProducts = async (request, response) => {
    pool.query('SELECT * FROM producto ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        let FoundProducts = await response.status(200).json(results.rows);//cambiar let x const
        return FoundProducts;
    });
}
/*const getProducts = (request, response) => {
    pool.query('SELECT * FROM producto ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    });
}*/

ProductController.getProductById = async (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM producto WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      let FoundProduct = await response.status(200).json(results.rows)
      return FoundProduct;
    })
}

ProduductController.createProduct = async (request, response) => {
    const { nombre, precio, cantidad, descripcion } = request.body
 
    Product = new Product({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        descripcion: descripcion
    });
    pool.query('INSERT INTO producto (nombre, precio, cantidad, descripcion) VALUES ($1, $2, $3, $4)', [nombre, precio, cantidad, descripcion], (error, results) => {
      if (error) {
        throw error
      }
      let FoundProduct= await response.status(201).send(`Product added in your whislist whit ID: ${results.insertId}`);//response.status(201).json({mesaje:`User added with ID: ${result.insertId}`});
      return FoundProduct;
    });
}

ProductController.updateProduct = async (request, response) => {
    const id = parseInt(request.params.id)
    const { nombre, precio, cantidad, descripcion } = request.body
  
    pool.query(
      'UPDATE producto SET nombre = $1, precio = $2, cantidad= $3, descripcion=$4 WHERE id = $5',
      [nombre, precio, cantidad, descripcion, id],
      (error, results) => {
        if (error) {
          throw error
        }
        let FoundProduct= await response.status(200).send(`Product modified on your wishlist with ID: ${id}`)
        return FoundProduct;
      }
    );
}

ProductController.deleteProduct = async (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM producto WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      let FoundProduct= await response.status(200).send(`Product with ID: ${id} deleted from your wishlist`)
      return FoundProduct;
    })
}


export default ProductController;
/*module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  }*/

