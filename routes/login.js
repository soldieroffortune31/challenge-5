const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.render('login');
})

router.post('/', (req, res) => {
	const {username, password} = req.body;
	if(username && password){
		res.status(200).redirect('/')
	}else{
		res.status(400).send('<h1>Login Gagal</h1>');
	}
});

module.exports = router;