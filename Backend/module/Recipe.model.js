const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' },

},
    {
        timestamps: true
    }

);
const Recipe = mongoose.model('RecipeSchema', RecipeSchema);
module.exports = Recipe;