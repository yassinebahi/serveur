const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Plateforme = require('./projets');


const projetSchema = new Schema({
  control:
        {
           reportId:Number,
           reportUnixDate: Date    
    
    },
    plateform:
        {
            device: String,
            API: Number,
            system: String,
            model: String,
            manufacturer: String,
            batteryLevel: Number
        },
    
    network: {

        isRoaming: Boolean,
        networkType : String,
        dataConnection: String,
        simoperator: String,
        countryIso: String,
        networkOperator: String,

        
       
    },
    traffic: {
        sum : {
            packets:
            {
                tx: Number,
                rx: Number
            },
            
            bytes: 
            {
                tx: Number,
                rx: Number
            }
        }
    }

},{collection: "PROJET_COLLEC"});

const Projet = mongoose.model('projet',projetSchema);


module.exports = Projet;