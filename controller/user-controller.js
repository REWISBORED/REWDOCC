const user = require("../model/user")
const jwt = require("../configs/jwt")
const validateEmail = require('validate-email-node-js');

module.exports = {
    signup: async (req,res) => {
        const data = req.body;
        let password = data.password;
        let buff = new Buffer(password);
        let encodedPass = buff.toString('base64');
        const result = validateEmail.validate(data.email);
        if (!result){
            res.status(406).send({message:"Invalid Email Format"})
        }
        const userd = new user({
            name: data.name,
            email: data.email,
            username: data.username,
            password: encodedPass,
            role: data.role
        })
        try {
            const check = await user.find({username: data.username})
            if (check.length === 0) {
                await userd.save();
                res.status(200).send({message:'User Created Successfully'})
            } else {
                res.status(406).send({message:"User already Registered"})
            }
        } catch (err) {
            res.status(406).send(err);
        }


    },
    listDoctors: async (req,res) => {
        try {
            const userd = await user.find({role:"doctor"})
            userd.map((value) => {
                delete value.password
            })
            res.json(userd)
        } catch (err) {
            res.send(err)
        }

    },
    login: async (req, res) => {
        const data = req.body;
        const searchedUser = await user.find({username: data.username})
        if (searchedUser.length !== 0) {
            let buff = new Buffer(searchedUser[0].password, 'base64');
            let decodedPass = buff.toString('ascii');
            if (data.password === decodedPass) {
                
                access_token = jwt.generateAccessToken(searchedUser[0].username)
                res.json({message:"Logged In",token:access_token})
            } else {
                res.status(401).send('Login Error')
            }
        } else {
            res.status(404).send('User Not found')
        }
    }

 }