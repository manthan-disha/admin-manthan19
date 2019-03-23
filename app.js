require('dotenv').config()

const express = require('express'),
    app = express(),
    path = require('path'),
    PORT = process.env.PORT || 3000,
    exphbs = require('express-handlebars'),
    cookieSession = require('cookie-session'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    helmet = require('helmet')

mongoose.connect(process.env.MongoDBURI, () => console.log('db connected'))

app.use(helmet({
    noCache: true,
    frameguard: 'deny',
    xssFilter: true
}))


app.use(express.static(path.resolve(__dirname, 'public')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

let hbs = exphbs.create({
    'extname': 'hbs',
    'defaultLayout': 'layout',
    'partialsDir': __dirname + '/views/partials/'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use('/public', require('./routes/admin_public'))
app.use('/', require('./routes/admin_private'))

app.get('*', (req, res) => {
    res.send(404, "Not Found")
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
