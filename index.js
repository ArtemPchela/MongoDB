const dotenv = require('dotenv');
dotenv.config();
const mongodb = require('mongodb');

mongodb.connect(process.env.CONNECTIONSTRING, {useUnifiedTopology: true}, async function(err, client) {
    const db = client.db();
    //method find() something
    // const result = await db.collection('test').find({name: 'Elena'}).toArray();
    // console.log(result);
    const newTest = db.collection('test');

    //method insertOne() added new item in collection
    //await newTest.insertOne({name: "Hokan", age: 47, jod: "co-founder"})
    //console.log("Added new test")

    //method updateOne(a, b) first argument ich update, second replace
    //better search for _id. copy _id in cloud.mongoDB and paste in code
    // await newTest.updateOne({_id: mongodb.ObjectID('5fb7d66b66dc46175c40ae53')}, {$set: {name: 'Iohan'}})

    //method deleteOne
    await newTest.deleteOne({_id: mongodb.ObjectID('5fb7d66b66dc46175c40ae53')}, {$set: {name: 'Iohan'}})

    //close iteration in node.js
    console.log('Added successfully')
    console.log('Deleted successfully')
    client.close();
})

