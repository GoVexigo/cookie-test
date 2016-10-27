var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

var cookie_name = 'testcookie';
var cors = require('cors');

app.use(cors());
app.use(cookieParser())

app.get('/test', function (req, res) {
    res.cookie(cookie_name , 'testValue', {expire : new Date() + 9999});
});
app.get('/getOne', function (req, res) {
    res.cookie(cookie_name , 'testValue', {sameSite: false, expire : new Date() + 9999});
    res.send('Cookie was set');
});

app.get('/getTwo', function (req, res) {
    console.log('Cookies: ', req.cookies);
    res.send('cookie is here?'+ req.cookies["cookie_name"]);
});

app.listen(5000, function () {
    console.log('Example app listening on port 3000!');
});