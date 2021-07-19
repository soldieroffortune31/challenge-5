const express = require('express');
const app = express();
const path = require("path");
const port = 3000;


const index = require('./routes/index.js')
const students = require('./routes/students.js');
const login = require('./routes/login.js');
const play = require('./routes/playgame.js');
const page2 = require('./routes/page2.js');
const page3 = require('./routes/page3.js');
const page4 = require('./routes/page4.js');
const page5 = require('./routes/page5.js');
const page6 = require('./routes/page6.js');

app.set('view engine', 'ejs');
// app.use('/', (req, res, next) => {
// 	console.log(req.method, req.url);
// 	next();
// })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", index)
app.use('/login', login);
app.use('/students', students);
app.use('/playgame', play);
app.use('/page2', page2);
app.use('/page3', page3);
app.use('/page4', page4);
app.use('/page5', page5);
app.use('/page6', page6);


app.use('/', (req, res) => {
	res.status('404').send('Page Not Found');
})
// app.get('/', (req, res) => {
// 	res.status(200).send('Hello World');
// });

app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});