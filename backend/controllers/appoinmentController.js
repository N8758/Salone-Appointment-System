const { model } = require("mongoose");
const salonModel=require("../modals/salonSchema")
const takeAppoinment=async (req, res) => {
    const { salonId } = req.params;
    const { name, email, phone,bookingDate,
        appoinmentAt } = req.body;
  
       
    try {
        const salondata = await salonModel.findOne({ '_id': salonId });
        console.log("salon",salondata);
      
      if (!salondata) {
        return res.status(404).send({ message: 'Salon not found' });
      }
  
    //   const salonAppoinment = salondata.appoinments.id(salonId);
    //   if (!salonAppoinment) {
    //     return res.status(404).send({ message: 'Salon not found' });
    //   }
  
      // Create a new application
      salondata.appoinments.push({
       name,
       email,
       phone,
       bookingDate,
       appoinmentAt
      });
  
      await salondata.save();
  
      res.status(201).send({ msg: 'Appoinment submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: 'Internal Server Error' });
    }
  }

  module.exports={takeAppoinment}