const Client = new Client(
    {
        ID: { type: String, require:true, unique: true},   
        Nombre: { type: String, require:true },  
        User: { type: String, require:true }, 
        Password: { type: String, require: true},
    },
    {
        timestamps: true
    },
);

export default Client;