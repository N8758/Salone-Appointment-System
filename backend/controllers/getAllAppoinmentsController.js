const salonModel=require("../modals/salonSchema")

const getAllAppoinments=async (req, res) => {
    const {email} = req.params;

    try {
        // Find the user by ID
        const user = await salonModel.findOne({email});

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user's appointments
        res.status(200).json({ appointments: user.appoinments });
    } catch (error) {
        console.error('Error fetching user appointments:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
module.exports={getAllAppoinments}