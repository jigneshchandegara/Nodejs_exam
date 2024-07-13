const { RecipeSchema } = require("../module")

let postrecipe = (body) => {
    return RecipeSchema.create(body)
}

let getrecipe = () => {
    return RecipeSchema.find().populate(["createdBy"])
}

let deleterecipe = (id) => {
    return RecipeSchema.findByIdAndDelete(id)
}

let updaterecipe = (id, body) => {
    return RecipeSchema.findByIdAndUpdate(id, body)
}

let getmyrecipe = (id) =>{
    return RecipeSchema.find({createdBy:id}).populate(["createdBy"])
}
module.exports = { postrecipe, getrecipe, deleterecipe, updaterecipe ,getmyrecipe }