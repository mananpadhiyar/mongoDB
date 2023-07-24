const restaurantModel = require("../model/restaurantModel")


module.exports.restaurantListByLocationId = async (request , response) => {
       
    let { loc_id } = request.params  //{location id: 1}   request.params.loc_id
      try {

        let filter = {location_id : loc_id }
        let projection = {name:1 , city:1 , image:1 ,_id :0 , locality:1 , location_id:1 , city_id:1};
        let listofRestaurant = await restaurantModel.find( filter , projection )


       let sendData = {
         
        status: listofRestaurant.length === 0 ? false : true,
        list : listofRestaurant

       }
       response.status(200).send(sendData)
        
    }
     catch (error) {
               
        let errorObj = {status : false , error}
            
        response.status(500).send(errorObj)
      }

}


//projection => get data as per giving requirement

// find have two parameter : find({filter} , {projection})
// in projection parameter need to pass value:1 
// here 1 means include , 0 means no include that value