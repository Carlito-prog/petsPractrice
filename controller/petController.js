const { Router } = require('express')
const router = Router()
const petServices = require('../services/petService')
const { requireAuth } = require('../utils/auth')


//router.get('*', requireAuth)

router.get('/AddPet', requireAuth, (req, res) => {
    res.status(200);
    res.render('addPet');
})

router.post('/AddPet', requireAuth, (req, res) => {

    console.log(req.body)
    res.status(200);

    if (req.body.name) {

        petServices.create(req.body).then(() => {
            res.redirect('/')
        }).catch((err) => {
            res.render('addPet', { message: "There is an error! " + err.message });
        })

        //   res.render('addPet', { message: "Successfully posted new pet!" });
    } else {
        res.render('addPet');
    }





    // if (req.body.name) {
    //     res.render('addPet', { message: "Successfully posted new pet!" });
    // } else {
    //     res.render('addPet');
    // }
})

router.get('/AddBreed', (req, res) => {
    res.status(200);
    res.render('addBreed');
})



router.get('/api/v1/pets', async(req, res) => {
    res.status(200);
    //  let pets2 = await loadPets();

    petServices.getAll().then(pets => {

        res.json(pets)

    }).catch(err => {
        res.json({ error: "error", message: err.message })
    })


})


module.exports = router;