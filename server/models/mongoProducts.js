import mongoose from "mongoose";

const productModel = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    pathPictures: [String],
    gender: String,
    type: String,
    article: String,
    sizesAndColors: [
        {
            title: String,
            colors: [
                {
                    title: String,
                    code: String,
                    number: String,
                }
            ]
        }
    ]
})

export default mongoose.model('products', productModel)