const mongoose=require("mongoose")

const appoinmentSchema=mongoose.Schema({
    phone:String,
    email:String,
    name:String,
    bookingDate: { type: Date, default: Date.now },
    appoinmentAt: { type: Date},
   

})
const salonSchema=mongoose.Schema({
    name:String,
    salonName:String,
    email:String,
    password:String,
    isAdmin:String,
    appoinments: [appoinmentSchema],
})

module.exports=mongoose.model("Salons",salonSchema)