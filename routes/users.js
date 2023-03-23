const express = require('express');

const router = express.Router();
router.get("/", (req,res,next) => {
    res.render('reg');
});
const route = express.Router();
router.get("/add-product", (req,res,next) => {
    res.render('formedit');
});

// router.post('/formedit', (req, res, next) => {
//     var fullname = req.body.fullname;
//     var phonenumber = req.body.phonenumber;
//     var email = req.body.email;
//     var password = req.body.password;
//     var address = req.body.address;
// });
//const bodyParser = require('body-parser');


// users.get('/formedit', (req, res, next) => {
//     var fullname = req.body.fullname;
//     var phonenumber = req.body.phonenumber;
//     var email = req.body.email;
//     var password = req.body.password;
//     var address = req.body.address;
// });




module.exports = router;