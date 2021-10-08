const express = require("express");
const path = require("path");
const { v4: uuid } = require("uuid");

const router = express.Router();

const storeSingleFile = (the_file) => new Promise((resolve, reject) => {
    const fileName = `${the_file.name}`;
    const uniqueFileName = uuid()
    the_file.mv(`storage/${uniqueFileName}.${fileName}`, (err) => {
        if (err) {
            console.log(err)
            reject(err);
        }
        // resolve({ fileName, uniqueFileName, accessPath: `http://${process.env.IP}:${process.env.PORT}/${uniqueFileName}.${fileName}` });
        resolve({ fileName, uniqueFileName, accessPath: `http://18.118.113.4:11000/${uniqueFileName}.${fileName}` });
    });
})

router.post("/upload", async (req, res) => {
    try {
        // console.log(req.files)
        let the_file = req.files.file;
        console.log(the_file)
        data = await storeSingleFile(the_file)
        console.log(data)
        if (data) {
            res.status(200).json({
                status: 'success',
                message: "File Upload Successfully ",
                data
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'Error',
            message: "Internal Server Error..File not Upload"
        });
    }
});

module.exports = router;