const pets = require('../data/pets.json')
const express = require('express');
const cors = require('cors')()
const config = require('./index')
const bp = require('body-parser')
const fetch = require('cross-fetch')
const asynchanlder = require('express-async-handler')
const formData = require("express-form-data");
const bcrypt = require('bcrypt')


const cookieParser = require('cookie-parser')
const session = require('express-session')



//local sorage to store tokens
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./temp-storage');
}


function setupExpress(app) {


    app.use(bp.json())
    app.use(formData.parse())
    app.use(cookieParser())
    app.use(cors)
    app.use(session({ secret: 'my secret' }, { httpOnly: true }, { secure: true }))




    async function loadPets() {
        let response = await fetch('http://localhost:8080/pets');
        return await response.json();
    }






    app.set('views', __dirname + '/../views');
    app.use(express.static('public'))
        // view engine, set view engine (files, instance)
    app.set('view engine', 'jsx')
    app.engine('jsx', require('express-react-views').createEngine());



    let password = "carl123";
    const salt = bcrypt.genSaltSync(config.saltRounds);
    bcrypt.hash(password, salt).then(hash => {
        console.log(`Password ${password} - Hashed one ${hash} `)
            //$2b$11$YQayZMaXbSPnb4TcwagTXeQ5ME7hOQiG8GF8YeQBCUP3ox9bEOJta
            //$2b$11$808eaUscewXVx/5JEsv9U.FtGsvo7yV3OTVFs5UGt26Fjb1tkRofa
    })

    bcrypt.compare(password, '$2b$11$YQayZMaXbSPnb4TcwagTXeQ5ME7hOQiG8GF8YeQBCUP3ox9bEOJta', (err, res) => {
        if (res) {
            console.log('password is correct')
        } else {
            console.log('incorrect password or username')
        }
    })


}

module.exports = setupExpress