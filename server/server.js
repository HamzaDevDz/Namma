// importing stuff --------------------------------------------------------------------------------------------
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser"
import {} from 'dotenv/config'
import connexion from "./db.js"
import upload from "./routes/upload.js"
import products from "./routes/products.js";


// app config --------------------------------------------------------------------------------------------
const app = express()
const port = process.env.PORT || 9000

// middlewares --------------------------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// db config --------------------------------------------------------------------------------------------
connexion()

// api routes --------------------------------------------------------------------------------------------
app.get('/', (req, res)=>res.status(200).send('Welcome to Namma !'))

// app.use("/post", post)
app.use("/pictures", upload)
app.use("/products", products)

// listner --------------------------------------------------------------------------------------------
app.listen(port, ()=>console.log('listening on localhost : ' + port))