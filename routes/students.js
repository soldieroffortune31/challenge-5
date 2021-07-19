const express = require('express');
const router = express.Router();
const fs = require('fs');
let db = require('../public/data/fsw-11-students.json');
const path = './public/data/fsw-11-students.json';

router.get('/', (req, res) => {
	// res.status(200).json(db);
	res.status(200).json(db);
	// res.status(200).render('form');
});


router.get('/:id', (req, res) => {
	const {id} = req.params;
	const getData = db.find(std => std.studentId === Number(id));
	if(getData){
		res.status(200).json(getData);
	}else{
		res.status(400).send('ID Not Found');
	};
});

router.post('/', (req, res) => {
	const {name, age} = req.body;
	const lastId = db.length;
	let newStudentId = lastId + 1;

	const newPost = 	{
		studentId : newStudentId,
		name : name,
		age : Number(age)
	};
	
	// db.push(newPost);
	// res.json(db);
	const file = fs.readFileSync(path, 'utf8')
	const newFile = JSON.parse(file);
	newFile.push(newPost);

	fs.writeFile(path, JSON.stringify(newFile), 'utf8', (e) =>{
		if (e) throw e;
		res.status(200).json(newFile);
	});
});

router.delete('/:id', (req, res) => {
	const id = Number(req.params.id);
	const found = db.find(element => element.studentId === id);
	if(found){
		const result = db.filter(i => i.studentId !== found.studentId);
		res.status(200).json(result);
	}else{
		res.status(400).send('ID Not Found');
	};
});

router.put('/:id', (req, res) => {
	const id = Number(req.params.id);
	const {name, age} = req.body;

	const found = db.find(element => element.studentId === id);
	if(found){
		db.forEach(element =>{
			if(element.studentId === id){
				element.studentId = id;
				element.name = name;
				element.age = Number(age);
			};
		})
		res.status(200).json(db);
	}else{
		res.status(400).send('ID Not Found')
	};
});

router.patch('/:id', (req, res) => {
	const id = Number(req.params.id);
	const {name, age} = req.body;

	const found = db.find(element => element.studentId === id);
	if(found){
		db.forEach(element => {
			if(element.studentId === id){
				element.studentId = id;
				element.name = name || found.name;
				element.age =  Number(age) || Number(found.age) ;
			}
		})
		res.status(200).json(db);
	}else{
		res.status(400).send('ID Not Found')
	}
});


module.exports = router;