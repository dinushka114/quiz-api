import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
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