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
module.exports = { postrecipe, getrecipe, deleterecipe, updaterecipe }