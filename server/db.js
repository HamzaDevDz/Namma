import mongoose from "mongoose"
import Pusher from "pusher"

const pusher = new Pusher({
    appId: "1268564",
    key: "67843c3bf2c33b4e1d28",
    secret: "e06265628e3ac531171d",
    cluster: "eu",
    useTLS: true
});

const connexion = async (uri, callback) => {
    try {
        // mongoose.connection.once('open', ()=>{
        //     const changeStreamPosts = mongoose.connection.collection('posts').watch()
        //     changeStreamPosts.on('change', change => {
        //         if(change.operationType === 'insert'){
        //             pusher.trigger('posts', 'inserted', {
        //                 change: change
        //             })
        //         }else{
        //             if(change.operationType === 'update'){
        //                 pusher.trigger('posts', 'updated', {
        //                     change: change
        //                 })
        //             }
        //             else{
        //                 console.log('Posts : Error triggering Pusher')
        //             }
        //         }
        //     })
        // })
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.MongoURL, connectionParams);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to database")
    }
}

export default connexion