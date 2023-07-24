const locationModel = require("../model/locationModel")

module.exports.home = (request , response) => {

    response.send("HOME API PAGE")

}


module.exports.locationList = async (request , response) => {

     try{
         
        let listOfLocation = await locationModel.find()

       let sendData = {
          
        status : locationModel.length === 0 ? false : true,
        list : listOfLocation,
    
       }
         
       response.status(200).send(sendData)

     }catch(error){
       
        let errorObj = {status:false , error}

       response.status(500).send(errorObj)
     }


}
