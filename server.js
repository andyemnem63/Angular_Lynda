var express = require('express'),
    fs      = require('fs'),
    app     = express(),
    PORT    = 8000;

app.use(express.static(__dirname + '/lib'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

require('./public/js/readJSON')(app);

app.listen(PORT, () => {
    console.log("listening to port" , PORT);
});
