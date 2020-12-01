import { Document } from "mongoose";

export interface User extends Document{
    readonly email:string,
    readonly password:String,
    readonly date_created:Date
}