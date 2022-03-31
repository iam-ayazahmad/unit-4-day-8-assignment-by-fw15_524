

const express=require("express");

const transporter=require("../configs/mail")

const User=require("../models/user.model");

const router=express.Router();

router.get("",async(req,res)=>{

    try{
        const page=req.query.page||1;
        const pagesize=req.query.pagesize||10

        const skip=(page-1)*pagesize

        const users=await User.find().skip(skip).limit(pagesize).lean().exec();
        const totalPages=Math.ceil(
            (await User.find().countDocuments())/pagesize
        );

        return res.status(200).send({users,totalPages})

    }
    catch(err){
        return res.status(500).send(err.message)

    }

})

router.post("",async(req,res)=>{

    try{

        const user=await User.create(req.body);

        transporter.sendMail
        ({
            from:'"InternTheory" <admin@amazon.com>',
            to:user.email,
            subject:`Welcome to ABC system ${user.first_name} ${user.last_name} `,
            text: ` Hi ${user.first_name}, Please confirm your email address`

        })

        return res.status(201).send(user)



    }
    catch(err){
        return res.status(500).send(err.message)

    }

})

module.exports=router