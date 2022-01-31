const mongoose = require('mongoose');
const config = require('../config/index')
const bcrypt = require('bcrypt')

// const { name, email, password } = req.body;
const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})


userSchema.methods = {
    comparePass(pass) {
        return bcrypt.compare(pass, this.password)
    }
}


userSchema.pre('save', async function() {

    const salt = bcrypt.genSaltSync(config.saltRounds);
    await bcrypt.hash(this.password, salt).then(hash => {
        this.password = hash;
    })


})


module.exports = mongoose.model('User', userSchema)