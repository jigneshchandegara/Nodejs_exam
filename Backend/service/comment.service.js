const { CommentSchema } = require("../module")

let postcomment = (body) => {
    return CommentSchema.create(body)
}

let getcomment = () => {
    return CommentSchema.find().populate(["createdBy", "recipe"])
}

let deletecomment = (id) => {
    return CommentSchema.findByIdAndDelete(id)
}

module.exports = { postcomment, getcomment, deletecomment }