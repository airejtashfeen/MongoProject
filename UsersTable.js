const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    username :{
    type: String,
    lowercase: true,
    required:true
    },
    password: {
        type:String,
        required:true
    }
});

const UserModel=mongoose.model("batman",UserSchema);

module.exports=UserModel;