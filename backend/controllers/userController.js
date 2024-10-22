const User = require('../models/userRegister')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")


const userRegister = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        const existUser = await User.findOne({email});

        if (existUser){
            return res.status(400).json({msg: 'User already exist'})
        }


        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await User({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save()
        res.status(200).json({msg: 'user register successfully'})

    }
    catch(error) {
        console.log('Error', error)
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existUser = await User.findOne({ email });

        if (!existUser) {
            return res.status(400).json({ msg: "User not registered" });
        }

        const compare = await bcrypt.compare(password,existUser.password)
        if (!compare){
            return res.status(400).json({msg: 'password not matched'})
        }

        const jwtToken = jwt.sign({user:existUser._id}, 'secret', {expiresIn:'1h'})


        res.status(200).json({ msg: "User logged in successfully", jwtToken });
    } catch (error) {
        console.error("Error occurred during login:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
};


module.exports = {userRegister, userLogin}