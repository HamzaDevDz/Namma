import express from "express"
import mongoProducts from "../models/mongoProducts.js";
import {ObjectId} from 'mongodb';
const router = express.Router();

router.post('/upload', (req, res) => {
    const newDress = req.body.newDress
    console.log(newDress)
    mongoProducts.create(newDress, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

router.get('/download', (req, res)=> {
    mongoProducts.aggregate([
        {
            $project:{
                title: 1,
                description: 1,
                price: 1,
                pathPicture: {$pathPictures: {$slice: 1}},
            }
        }
    ]).exec((err, data) => {
        res.send(data)
    })
})

// OTHERS ---------------------------------------------------------------------------------
router.post('/search', (req, res)=>{
    const search = req.body.search
    const idUser = req.body.idUser
    // console.log(search)
    // console.log(idUser)
    const Value_match = new RegExp('^'+search,'i');
    // console.log(Value_match)
    mongoProducts
        .aggregate([
            {
                $match:
                    {
                        $or:[
                            {name: {$regex: Value_match}},
                            {firstName: {$regex: Value_match}},
                            {username: {$regex: Value_match}}
                            ],
                        _id : {$ne: ObjectId(idUser)}
                    }
        }])
        .exec((err, data) => {
            res.send(data)
    })
})

router.post('/invite', (req, res)=>{
    // console.log(req)
    mongoProducts.findOneAndUpdate(
        {_id: ObjectId(req.body.idRequest)},
        {
            $push:{
                idRequests: ObjectId(req.body.idUser)
            }
        }
    ).then(data => {
        // console.log(data)
        res.send(data).status(200)
    }).catch(err => {
        res.status(500).send(err)
    })
})

router.post('/disinvite', (req, res)=>{
    // console.log(req)
    // console.log(req.body)
    mongoProducts.findOneAndUpdate(
        {_id: ObjectId(req.body.idRequest)},
        {
            $pull:{
                idRequests: ObjectId(req.body.idUser)
            }
        }
    ).then(data => {
        // console.log(data)
        res.send(data).status(200)
    }).catch(err => {
        res.status(500).send(err)
    })
})

router.post('/synchronisation', (req, res)=>{
    // console.log(req.body.idUser)
    mongoProducts.findOne(
        {_id: ObjectId(req.body.idUser)},
    ).then(data => {
        // console.log(data)
        res.send(data).status(200)
    }).catch(err => {
        // console.log(err)
        res.status(500).send(err)
    })
})

router.get('/get', (req, res)=>{
    // console.log(req.query)
    mongoProducts.findOne(
        {_id: ObjectId(req.query.idUser)},
    ).then(data => {
        // console.log(data)
        res.send(data).status(200)
    }).catch(err => {
        res.status(500).send(err)
    })
})

router.post('/requesters', (req, res)=>{
    const myIdUser = req.body.myIdUser
    mongoProducts.findOne(
        {_id: ObjectId(myIdUser)},
    ).then(data => {
        // res.send(data).status(200)
        // console.log(data.idRequests)
        let idbRequestObject = []
        data.idRequests.forEach(idRequest => {
            idbRequestObject.push(ObjectId(idRequest))
        })
        mongoProducts.find(
                {_id: {$all : idbRequestObject}},
            ).then(data => {
                res.send(data)
            })
            .catch(err => {
                return 'error'
            })
        }).catch(err => {
        return 'error'
    })
})

router.post('/addFriend', (req, res)=>{
    mongoProducts.findOneAndUpdate(
        {_id: ObjectId(req.body.idUser)},
        {
            $push:{
                idFriends: req.body.idRequest
            },
            $pull:{
                idRequests: req.body.idRequest
            }
        }
    ).then(data => {
        // console.log(data)
        // res.send(data).status(200)
    }).catch(err => {
        res.status(500).send(err)
    })
    mongoProducts.findOneAndUpdate(
        {_id: ObjectId(req.body.idRequest)},
        {
            $push:{
                idFriends: req.body.idUser
            },

        }
    ).then(data => {
        // console.log(data)
        // res.send(data).status(200)
    }).catch(err => {
        res.status(500).send(err)
    })
})

router.post('/refuseFriend', (req, res)=>{
    mongoProducts.findOneAndUpdate(
        {_id: ObjectId(req.body.idUser)},
        {
            $pull:{
                idRequests: req.body.idRequest
            }
        }
    ).catch(err => {
        res.status(500).send(err)
    })
})

router.post('/removeFriend', (req, res)=>{
    mongoProducts.findOneAndUpdate(
        {_id: ObjectId(req.body.idUser)},
        {
            $pull:{
                idFriends: req.body.idFriend
            }
        }
    ).catch(err => {
        res.status(500).send(err)
    })
    mongoProducts.findOneAndUpdate(
        {_id: ObjectId(req.body.idFriend)},
        {
            $pull:{
                idFriends: req.body.idUser
            }
        }
    ).catch(err => {
        res.status(500).send(err)
    })
})

router.post('/getFriends', (req, res)=>{
    mongoProducts.findOne(
        {_id: ObjectId(req.body.myIdUser)},
    ).then(data => {
        let idbFriendsObject = []
        data.idFriends.forEach(idFriend => {
            idbFriendsObject.push(ObjectId(idFriend))
        })
        mongoProducts.find(
            {_id: {$all : idbFriendsObject}},
        ).then(data => {
            res.send(data)
        })
            .catch(err => {
                return 'error'
            })
    }).catch(err => {
        return 'error'
    })
})

export default router

// module.exports = router;