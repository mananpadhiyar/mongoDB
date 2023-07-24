// api => api/restaurant/location/id
// we are getting those list in json format
// web/app <===> jsonData <===> REST API <===> server
const apiRoutes = require('express').Router()

const locationController = require("../controller/locationController")

const restaurantController = require("../controller/restaurantController")

apiRoutes.get("/api" , locationController.home)

apiRoutes.get("/api/get-location-list" , locationController.locationList  )

apiRoutes.get("/api/get-restaurant-list-by-location-id/:loc_id" , restaurantController.restaurantListByLocationId )

// : => for dynamic list , as per user

module.exports = apiRoutes
