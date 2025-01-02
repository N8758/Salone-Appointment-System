const salonModel=require("../modals/salonSchema")
const userSchema = require("../modals/userSchema")

const register =async(req,res)=>{

    const {name,salonName, email, password ,isAdmin }=req.body

    console.log("Register")
    try{
        const salonData= new salonModel({
            name,salonName, email, password ,isAdmin 
        })

        const result=await salonModel.findOne({email});
        console.log(result);
        if(result){
            return res.status(400).send({status:"User already registred ! please login."})
        }

        const data=await salonData.save()
        
        res.status(201).send({status:"Success"})

    }catch(error){
        res.status(400).send({error, status:"Failed"})
    }
}

const login =async(req,res)=>{

    const {email, password ,isAdmin }=req.body

    console.log("login")
    console.log(req.body)
    try{
        
        let data;
        if(isAdmin==='true'){
            data=await salonModel.findOne({email})
        }else{

            data=await userSchema.findOne({email:email})
        }
        console.log(data);  
        if(data){
            if(data['password'] === password){
                res.status(200).send({status:"Success"})
            }else{
                res.status(400).send({status:"Invalid Credientials"})
            }
        }else{
            res.status(400).send({status:"User not found!"})
        }
     

    }catch(error){
        res.status(400).send({error, status:"Server Internal Error!!"})
    }
}
const User = require('../modals/userSchema');

const registerUser = async (req, res) => {
    const { name, phone,email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const newUser = new User({
            name,
            phone,
            email,
            password // In a production environment, it's highly recommended to hash the password before saving it to the database
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const getAllSalons=async(req,res)=>{
    try{
        const salons = await salonModel.find();
    res.status(200).json({
      status: 'success',
      data: {
        salons
      }
    });

    }catch(error){
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports={register,login,getAllSalons}