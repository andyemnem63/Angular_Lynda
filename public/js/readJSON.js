var fs = require('fs');

module.exports = (app) => {
    fs.readFile('./public/js/data.json', 'utf8', function (err, data) {
        if (err) throw err;
        app.get('/api', (req, res) => {
            res.json(JSON.parse(data));
        });
    });
}






