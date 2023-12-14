const User=require("./UsersTable");

const addUser=async (username,password)=>{
    let one=new User();
    one.username=username;
    one.password=password;
    await one.save();
    return one;
}

const retrieveUsers = async ()=>{
    let allUsers= await User.find();
    return allUsers;
}

const deleteUser= async (_id)=>{
    let newUser= await User.findByIdAndDelete(_id);
    return newUser;
}

const updateUser= async (_id,username,password)=>{
    let newUser = await User.findById(_id);
    newUser.username=username;
    newUser.password=password;
    await newUser.save();
    return newUser;
}

module.exports.addUser=addUser;
module.exports.retrieveUsers=retrieveUsers;
module.exports.deleteUser=deleteUser;
module.exports.updateUser=updateUser;