const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.render('page6');
})


module.exports = router;