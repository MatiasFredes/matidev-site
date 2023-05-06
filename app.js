const express = require('express');
const app = express();


app.use(express.static('public'));

// Set up a route for the PDF file
app.get('/resume', (req, res) => {
		// Send the PDF file as the response
		res.sendFile(__dirname + '/public/CV_Matias_Fredes.pdf');
	});

// Start the server on port 3000
app.listen(3000, () => {
	console.log('Server running on http://localhost:3000/');
});