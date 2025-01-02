const express=require("express")

const salonController= require("../controllers/salonController")
const getappoinmentsController= require("../controllers/getAllAppoinmentsController")
const appoinmentController= require("../controllers/appoinmentController")
const  {registerUser}  = require('../controllers/userController');

const route=express.Router()

route.post('/register',salonController.register)
route.post('/login',salonController.login)
route.get('/getsalons',salonController.getAllSalons)

route.get('/:email/appointments',getappoinmentsController.getAllAppoinments)

route.post('/takeappoinment/:salonId',appoinmentController.takeAppoinment)
// test
// http://localhost:8000/salon/takeappoinment/66194fbfcd1a5e747a3dd9a9
// {
//     "email":"test03@gmail.com",
//     "phone":"123456",
//     "name":"Anantha user",
//     "appointmentAt": "2024-04-15T10:00:00.000Z"
// }


route.post('/registeruser', registerUser);
// test
// http://localhost:8000/salon/registeruser
// {
//     "name": "john_doe",
//     "phone":"99758652",
//     "email": "john.doe@example1.com",
//     "password": "password123"
// }

module.exports=route;