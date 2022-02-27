const CatalogItem = new CatalogItem(
    {
        IDproducto: { type: String, require:true, unique: true},   
        Color: { type: String, require:true },  
        Serial: { type: String, require:true }, 
    },
    {
        timestamps: true
    },
);

export default CatalogItem;