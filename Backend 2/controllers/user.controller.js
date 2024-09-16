import { User } from "../models/user.model.js";

export const signup = async (req, res) =>{
    const {username, email, password, firstname, lastname, dob} = req.body;
    console.log(username, email, password)
    const newUser = new User({username, email, password, firstname, lastname, dob});

    await newUser.save().then(() =>{
        res.send({message:"User is created"});
    }).catch((err) =>{
        console.log(err)
    })
}

