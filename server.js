var express = require('express');

// Create out app
var app = express();

// Statically serve public folder
app.use(express.static('public'));

app.listen(3000, function()
{
    console.log('Express server is up on port 3000');
});