const express=require("express");
const mongoose=require("mongoose");
const {addUser,retrieveUsers,deleteUser,updateUser}=require("./Operations");

const app=express();
const port= 3000;
app.use(express.json());


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/BatmansDatabase",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async()=>{
    console.log("Connection Successfull");
        
    let batman1=await addUser("batman1","imairej1");
    console.log(batman1);
    // let batman2=await retrieveUsers();
    // console.log(batman2);
    // let deleteBatman=await deleteUser("657a98510c7b291a7a85e9b9");
    // console.log(deleteBatman);
    // let updateBatman=await updateUser("657a97f01f484af0765ac85a","airej","imbatman");
    // console.log(updateBatman);

}).catch((err)=>{
    console.log("Connection Failed");
    console.log(err.message);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
