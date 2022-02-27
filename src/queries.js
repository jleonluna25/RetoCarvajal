const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'jesusl',
  host: 'localhost',
  database: 'ecommerce',
  password: '891127aa',
  port: 5432,
});


const getProducts = (request, response) => {
    pool.query('SELECT * FROM producto ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    });
}

const getProductById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM producto WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createProduct = (request, response) => {
    const { nombre, precio, cantidad, descripcion } = request.body
  
    pool.query('INSERT INTO producto (nombre, precio, cantidad, descripcion) VALUES ($1, $2, $3, $4)', [nombre, precio, cantidad, descripcion], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Product added in your whislist whit ID: ${result.insertId}`);//response.status(201).json({mesaje:`User added with ID: ${result.insertId}`});
    });
}

const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const { nombre, precio, cantidad, descripcion } = request.body
  
    pool.query(
      'UPDATE producto SET nombre = $1, precio = $2, cantidad= $3, descripcion=$4 WHERE id = $5',
      [nombre, precio, cantidad, descripcion, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Product modified on your wishlist with ID: ${id}`)
      }
    );
}

const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM producto WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product with ID: ${id} deleted from your wishlist`)
    })
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  }

