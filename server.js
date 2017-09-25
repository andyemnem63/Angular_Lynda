var express = require('express'),
    fs      = require('fs'),
    app     = express(),
    PORT    = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

require('./public/js/readJSON')(app);

app.listen(PORT, () => {
    console.log("listening to port" , PORT);
});
