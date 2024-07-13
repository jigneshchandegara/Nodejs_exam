const { recipeservice } = require("../service");


let createrecipe = async (req, res) => {
    try {
        let body = req.body;
        let recipe = await recipeservice.postrecipe(body);

        res.status(201).json({
            message: "create recipe successfully",
            data: recipe
        })
    } catch (error) {
        res.status(500).json({
            message: "create recipe failed",
            error: error.message
        })
    }
}
let recipeget = async (req, res) => {
    try {
        let result = await recipeservice.getrecipe();
        res.status(200).json({
            message: "get recipe successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: "get recipe failed",
            error: error.message
        })
    }
}

let recipedelete = async (req, res) => {
    try {
        let { id } = req.params;
        let result = await recipeservice.deleterecipe(id);
        res.status(200).json({
            message: "delete recipe successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: "delete recipe failed",
            error: error.message
        })
    }
}

let recipeupdata = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let result = await recipeservice.updaterecipe(id, body);
        let newbody = {
            ...body,
            _id: id
        }
        res.status(200).json({
            message: "update recipe successfully",
            data: newbody
        })
    } catch (error) {
        res.status(500).json({
            message: "update recipe failed",
            error: error.message
        })
    }

}

let recipegetmy = async (req, res) => {
    try {
        let { id } = req.params
        let result = await recipeservice.getmyrecipe(id);
        res.status(200).json({
            message: "get my recipe successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            message: "get my recipe failed",
            error: error.message
        })
    }
}
module.exports = { createrecipe, recipeget, recipedelete, recipeupdata, recipegetmy };