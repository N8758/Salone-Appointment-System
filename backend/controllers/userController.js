const User = require('../modals/userSchema');

// Controller function for user registration
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

module.exports = { registerUser };
