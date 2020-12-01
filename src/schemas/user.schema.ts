import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    firstName:{
        required:true,
        type:String
    },
    lastName:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    date_created:{
        required:true,
        default:Date.now,
        type:Date
    }
})