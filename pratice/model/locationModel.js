//import schema

const mongosee = require("mongoose")

//create schema
const locationSchema = new mongosee.Schema(
         
    {
       
        "name": {type:String},
        "city_id":{type:Number},
        "location_id": {type:Number},
        "city": {type:String},
        "country_name": {type:String}
      }

)

//create and export model

const locationModel = mongosee.model("locations" , locationSchema ,"locations" )

module.exports = locationModel