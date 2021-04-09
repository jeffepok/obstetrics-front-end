import User from '../models/User';
var jwt = require('jsonwebtoken');
// import * as jwt from 'jsonwebtoken';
import { registeredValidation, loginValidation } from '../validation';
var bcrypt = require('bcryptjs');
// import * as bcrypt from 'bcryptjs';

    export async function register(req:any, res:any){

        //Lets validate the data before we make a user
        const {error} = registeredValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Checking if the user is already in the database
        const emailExist = await User.findOne({email: req.body.email});
        if(emailExist) return res.status(400).send("Email already exists");

        // Hash passwords
        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err: any, hashedPassword: any) =>{

            //Create a new user
            const user = new User({
                email: req.body.email,
                password: hashedPassword
            });
            user.save().then(
                (value: any) =>{
                    res.send({user: user._id});
                },
                (err:any) => res.status(400).send(err));
        });


    }
    export async function login(req:any, res:any){
        //Lets validate the data before we make a user
        const {error} = loginValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message)

        //Checking if the user is already in the database
        const user:any = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send("Email doesn't exist");
//   Checking if Password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send("Invalid password");

        //Create and assign a token
        const token = jwt.sign({_id: user._id}, 'kjdkjfkjdkfjkdjfkdjkfjdk');
        res.header('token', token).send({'token': token});
    }

