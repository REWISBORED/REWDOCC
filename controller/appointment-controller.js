const user = require("../model/user")
const appointment = require("../model/appointments")
const jwt = require("../configs/jwt")
const mongoose = require('mongoose')

module.exports = {
    create: async (req, res) => {
        const data = req.body;
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1]
        const doctor = await user.find({username: data.doctor})
        if (doctor[0].role !== "doctor"){
            res.send(406).send({message:"Invalid Doctor"})
        }
        const app = new appointment({
            time: data.date,
            doctor: doctor[0]
    })
        await app.save()
        const payload = jwt.verifyToken(token)
        if (payload) {
            const searchedUser = await user.find({username: payload.username})
            searchedUser[0].appointment.push(app)
            await searchedUser[0].save()
            res.send(200).send({message:"Appointment Created"})
        } else {
            res.send(401).send("Authorization Error")
        }
    },
    list: async (req, res) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        const payload = jwt.verifyToken(token)
        if (payload) {
            const searchedUser = await user.find({username: payload.username})
            const respData = searchedUser[0].appointment
            let resp = []
            for (let id of respData){
                console.log(respData)
                console.log(id)
                const appoin = await appointment.findById(mongoose.mongo.ObjectId(id))
                if (appoin){
                const doct = await user.findById(mongoose.mongo.ObjectId(appoin.doctor))
                const data = {time: appoin.time,doctor:doct.name, cancleStatus: appoin.cancle}
                resp.push(data)}
            }
            res.json(resp)
        } else {
            res.send(401).send("Authorization Error")
        }
    }
}