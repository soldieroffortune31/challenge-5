const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.render('page5');
})


module.exports = router;