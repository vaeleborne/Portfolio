//PACKAGE REQUIREMENTS
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const flash = require('connect-flash');
const methodOverride = require('method-override')
const session = require('express-session');

//CUSTOM FILE REQUIREMENTS
const ExpressError = require('./utils/ExpressError');

const app = express();

//SET VIEW ENGINE TO EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//SESSION SETUP
const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));

//APP USES
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(flash());

//MIDDLEWARE
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/experience', (req, res) => {
    res.render('experience');
})

app.get('/projects', (req, res) => {
    res.render('projects');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

//404 Error Route
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

//Catch all error
app.use((err, req, res, next) => {
    const {status = 500 } = err;
    if(!err.message) err.message = "Oh No, Something Went Wrong";
    res.status(status).render('error', {err});
})

//START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})