let express = require('express');
let app = express();

const port = process.env.PORT || 3000;

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
    res.redirect('back');
});

app.listen(port, ()=>{
    console.log('Server is running!!!');
});

