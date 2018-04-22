let express = require('express');
let app = express();
let compression = require('compression');

const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/developments', (req, res) => {
    res.render('developments');
});

app.get('/team', (req, res) => {
    res.render('team');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('*', (req, res)=>{
    res.status(404).render('404');
});

app.listen(port, ()=>{
    console.log('Server is running!!!');
});

