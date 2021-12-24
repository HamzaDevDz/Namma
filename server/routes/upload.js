import upload from "../middlewares/upload.js"
import express from "express"
import mongoose from "mongoose";
import Grid from "gridfs-stream"
const router = express.Router();

let gfs;

const conn = mongoose.connection;
conn.once("open", () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("images");
})

router.post("/upload", upload.array("images[]", 10), async (req, res) => {
    if (req.files === undefined) return res.send("File must be selected !")
    const filesNames = []
    req.files.forEach(image => {
        filesNames.push(image.filename)
    })
    return res.send(filesNames)
});

router.get("/download", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.query.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("Image not found");
    }
})

router.delete("/delete/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

export default router
