const mongodb = require('mongodb');
const config = require('./index')

module.exports = (app) => {


    const MongoClient = mongodb.MongoClient;
    const connectionStr = config.DB_CONNECTION
    const client = new MongoClient(connectionStr)
    client.connect(function(err) {

        if (err) { throw new Error(err) }
        //continue
        const db = client.db('studentsdb')
        const students = db.collection('students')

        students.insertOne({
            "dob": "1-1-1990",
            "grade": 80.5,
            "name": "Hamid",
            "speciality": "programming"
        }, (err, data) => {

            students.find({}).toArray((err, data) => {
                console.log(data)
            })


        })
    })


}