const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
	origin: '*',
	optionsSuccessStatus: 200,
	preflightContinue: true,
}));

app.get('/hello', function (req, res) {
	res.json({ message: 'Hello, world!' });
});

app.post('/update', (req, res) => {
	res.json({ message: 'post request succeeded.' })
})

const port = process.env.PORT || 8080;
console.log('server listening on port ', port);
app.listen(port);
