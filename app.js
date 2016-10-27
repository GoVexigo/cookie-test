var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

var cookie_name = 'vast-call';
var cors = require('cors');

app.use(cors());
app.use(cookieParser())

app.get('/test', function (req, res) {
    res.cookie(cookie_name , 'testValue', {domain:'vxvid.com', expire : new Date() + 9999});
});
app.get('/getOne', function (req, res) {

    res.cookie(cookie_name , req.params.vastId , {
        domain: 'vxvid.com',
        sameSite: false,
        expire: new Date() + 9999,
        maxAge: 1000 * 60 * 24 * 60 // 60 days
    });
    res.send('Cookie was set');
});

app.get('/getTwo', function (req, res) {
    console.log('Cookies: ', req.cookies);
    res.send('cookie is here?'+ req.cookies["cookie_name"]);
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});