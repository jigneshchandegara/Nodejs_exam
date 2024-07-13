const { userSchema } = require("../module")

let creatuser = (body) => {
    return userSchema.create(body)
}

let getuser = () => {
    return userSchema.find();
}

let findByName = (name) => {
    return userSchema.findOne({ username: name });
};

module.exports = { creatuser, findByName, getuser }