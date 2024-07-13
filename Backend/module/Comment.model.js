const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    Commentuser: {
        type: String,
        required: true
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'RecipeSchema' },

},
    {
        timestamps: true
    }

);

const Comment = mongoose.model('CommentSchema', CommentSchema);
module.exports = Comment;