var express = require("express");
var router = express.Router();
const { Get, GetById, Post, Put, Delete, Patch } = require("../modules/http/axios");


/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/get", async (req, res) => {
    try {
        const datas = await Get();
        res.status(200).json({
            message: 'Get data success',
            data: datas.data,
            error: null,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Get data failed',
            data: null,
            error: error,
            success: false
        });
    }
})

router.get("/get/:id", async (req, res) => {
    try {
        const datas = await GetById(req.params.id);
        res.status(200).json({
            message: 'Get data success',
            data: datas.data,
            error: null,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Get data failed',
            data: null,
            error: error,
            success: false
        });
    }
})

router.post("/post", async (req, res) => {
    try {
        const datas = await Post();
        res.status(200).json({
            message: 'Post data success',
            data: datas.data,
            error: null,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Post data failed',
            data: null,
            error: error,
            success: false
        });
    }
})

router.put("/put/:id", async (req, res) => {
    try {
        const datas = await Put(req.params.id);
        res.status(200).json({
            message: 'Put data success',
            data: datas.data,
            error: null,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Put data failed',
            data: null,
            error: error,
            success: false
        });
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        const datas = await Delete(req.params.id);
        res.status(200).json({
            message: 'Delete data success',
            data: datas.data,
            error: null,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Delete data failed',
            data: null,
            error: error,
            success: false
        });
    }
})

router.patch("/patch/:id", async (req, res) => {
    try {
        const datas = await Patch(req.params.id);
        res.status(200).json({
            message: 'Patch data success',
            data: datas.data,
            error: null,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Patch data failed',
            data: null,
            error: error,
            success: false
        });
    }
})

module.exports = router;