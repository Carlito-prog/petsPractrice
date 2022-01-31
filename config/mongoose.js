const mongoose = require('mongoose');
const config = require('./index')

module.exports = (app) => {
    mongoose.connect(config.DB_CONNECTION).then(() => {
        console.log('Database Connected');
    })

    let guitarSchema = mongoose.Schema({
        name: String,
        model: String,
        serialNum: { type: Number, required: true },
        tuned: Boolean
    })

    let GuitarModel = mongoose.model("Guitar", guitarSchema)


    let guitar1 = new GuitarModel({ name: "Black Duity", model: "mdl-98378", serialNum: 12345, tuned: true });
    //let guitar2 = new GuitarModel({ name: "Black Duity", model: "mdl-98378" });


    // guitar2.save(function(err, guitar) {
    //     if (err) { return console.error(err) }
    //     console.log(guitar.name + " saved to Guitar Collection")
    // });

    GuitarModel.find({ name: "Black Duity" }).then(guitars => {
        console.log(guitars)
    });



    //console.log(data);


}