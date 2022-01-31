const Pet = require('../models/Pet')

//curd

async function create(data) {
    //let pet = new Pet({name:data.name, description:data.description})
    let pet = new Pet(data)

    return await pet.save().then(result => {
        console.log('pet saved!')
    })

}

async function getAll() {
    return await Pet.find({}).lean();
}

module.exports = {
    getAll,
    create
}