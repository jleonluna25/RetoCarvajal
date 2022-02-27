const Product = new Product(
    {
        ID: { type: String, require:true, unique: true},   
        Nombre: { type: String, require:true },  
        Precio: { type: Number, require:true }, 
        Stock: { type: BigInt, require: true},
        Descripcion: { type: String, require: true},
    },
    {
        timestamps: true
    },
);

export default Product;