const { Router } = require('express')
const router = Router()
const petServices = require('../services/petService')
const User = require('../models/User')
const jwt = require('../utils/jwt')
const config = require('../config')
const session = require('express-session')





router.get('/user/login', (req, res) => {
    res.status(200);
    res.render('login');
})



router.get('/user/logout', (req, res) => {
    //req.session.destroy()
    res.clearCookie(config.cookie);
    res.status(200);
    res.redirect('/');
})

router.get('/user/register', (req, res) => {
    res.status(200);
    res.render('register');
})

router.post('/user/register', (req, res, next) => {
    console.log(req.body)
    const { name, email, password, confrimpassword } = req.body;
    console.log(name)

    //1-make sure its not on db
    //2-save it
    //3-tell user the registation was successfull

    User.findOne({ email }).then((user) => {

        if (user) {
            const msg = 'the given email is already in use...';
            res.redirect(`/user/register?error=${msg}`);
        } else {
            return User.create({ email, name, password })
        }
    }).then((createdUser) => {

        //token generated at register
        const token = jwt.createToken(createdUser._id)
            //  localStorage.setItem(config.cookie, JSON.stringify(token)); //key-value (kstring:vstring)
        res.cookie(config.cookie, token)
        res.redirect('/user/login?token=' + token);

    }).catch((e) => {
        console.log(e)
        res.redirect(`/user/register?error`);
    })

    // res.status(200);
    //  res.render('register');
})


router.post('/user/login', (req, res, next) => {
    console.log(req.body)
    const { email, password } = req.body;
    console.log(email)
    res.status(200);
    // res.render('login');

    //1-make sure its not on db
    //2-compare with pass
    //3-if pass is correct then take him to (home or profile)

    User.findOne({ email }).then((user) => {

        return Promise.all([user.comparePass(password), user])

    }).then((returnedPasswordAndUser) => {

        if (!returnedPasswordAndUser[0]) { throw new Error('Invalid Password') }
        // console.log(user)
        let usr = returnedPasswordAndUser[1];
        console.log(usr)
        console.log(usr._id)

        //token generated at login
        const token = jwt.createToken(usr._id)
            //localStorage.setItem(config.cookie, JSON.stringify(token)); //key-value (kstring:vstring)
        res.cookie(config.cookie, token)
        res.redirect(`/?hello=${usr.name}&token=${token}`);


    }).catch((e) => {
        console.log(e)
        res.redirect(`/user/login?error`);
    })


})




module.exports = router;