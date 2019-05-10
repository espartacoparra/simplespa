const conect=require('../db/mongoose');
const Schema=require('mongoose').Schema;
const models={
    users:function(){
        var user= new Schema(
        {username:String,
        password:String,
        name:String,
        lastname:String,
        cedula:Number});
        return conect.model("users",user);
    },
    phones:function(){
        var phone= new Schema(
        {userid:String,
        phone:Number});
        return conect.model("phones",phone);
    }
}
module.exports = models;
