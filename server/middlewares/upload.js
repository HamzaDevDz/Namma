import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
import path from "path";

const storage = new GridFsStorage({
    url: process.env.MongoURL,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const matchImage = ["image/png", "image/jpeg", "image/jpg"]
        // const matchVideo = ["video/mp4", "video/avi", "video/wmv"];

        if (matchImage.indexOf(file.mimetype) === -1 && matchVideo.indexOf(file.mimetype) === -1) {
            // return `file-${Date.now()}${path.extname(file.originalname)}`
            return 'Incorrect format'
        }

        return {
            bucketName: "pictures",
            filename: `picture-${Date.now()}${path.extname(file.originalname)}`
        }
    },
})

const upload = multer({ storage })
export default upload
