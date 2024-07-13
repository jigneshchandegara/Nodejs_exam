let mongoose = require("mongoose");

const connectdb = () =>{
    mongoose.connect(process.env.DB_URL).then(() =>{
        console.log("DB connected successfully");
    }).catch((error) =>{
            console.log(error);
    })
}

module.exports = connectdb


