const { commentservice } = require("../service")

let createcomment = async (req, res) => {
    try {
        let body = req.body
        let comment = await commentservice.postcomment(body);
        res.status(200).json({ message: "Comment created successfully", data: comment })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong in comment",
            error: error.message
        })
    }
}

let commentget = async (req, res) => {
    try {
        let comment = await commentservice.getcomment()
        res.status(200).json({ message: "Comment get successfully", data: comment })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong in comment",
            error: error.message
        })
    }
}

let commentdelete = async (req, res) => {
    try {
        let { id } = req.params;
        let comment = await commentservice.deletecomment(id);
        res.status(200).json({ message: "Comment deleted successfully", data: comment })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong in comment",
            error: error.message
        })
    }
}

module.exports = { createcomment, commentget,commentdelete }