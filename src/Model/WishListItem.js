const WishListItem = new WishListItem(
    {
        IDproducto: { type: String, require:true, unique: true},   
        Color: { type: String, require:true },  
        Serial: { type: String, require:true }, 
        IDcliente: { type: String, require:true, unique: true }, 
    },
    {
        timestamps: true
    },
);

export default WishListItem;