const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.render('page4');
})


module.exports = router;