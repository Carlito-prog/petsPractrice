const { Router } = require('express')
const router = Router()
const petServices = require('../services/petService')

router.get('/', async(req, res) => {
    res.status(200);
    //  let pets2 = await loadPets();

    const cookiesTerms = req.cookies.cookiesTerms;
    let isLoggedIn = req.cookies.x_auth_token ? true : false

    petServices.getAll().then(pets => {

        res.render('home', { pets: pets, cookiesTerms: cookiesTerms, isLoggedIn });

    }).catch(err => {
        res.render('home', { pets: [] });
    })



})





router.get('/edit', (req, res) => {
    res.status(200);
    res.render('edit');
})

router.get('/delete', (req, res) => {
    res.status(200);
    res.render('delete');
})



router.get('/readSession', (req, res) => {
    res.json(req.session)
})


router.get('/setCookies', (req, res) => {

    req.session.message = "hello"

    res.cookie("cookiesTerms", 'ok')
    res.status(200);
    res.redirect('/?cookies=true');
})

router.get('/clearCookies', (req, res) => {
    res.cookie("cookiesTerms", null)
    res.status(200);
    res.redirect('/?cookies=false');
})



module.exports = router;