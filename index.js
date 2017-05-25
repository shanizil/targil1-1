
const   express    = require('express'),
        app        = express(),
        ages       = require('./data/index'),
        bodyParser = require('body-parser'),
        port       = process.env.PORT || 3000;

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extend: true}));

app.get('/getAllData', (req,res) =>{ 
    ages.getAllAges().then(docs => res.json(docs));
     }); 

app.post('/getAgeJson',(req,res) =>{
    ages.cheakAgesId(req.body.id).then(docs => res.json(docs));
     });
app.post ('/getAgesTypeData' ,(req,res) =>{ 
    res.status(200).json(ages.cheakProfileAndMovie(req.body.id,req.body.movie));
}); 
 app.get('/' ,
     (req,res) =>{
     res.sendFile(`${__dirname}/index.html`);
    });
     app.get('/includes/style.css',
    (req,res) =>{
     res.sendFile(`${__dirname}/includes/style.css`);
     });
app.all('*',(req,res) =>{ 
        res.json('not found');
}); 

app.listen(port,
    () => {
        console.log(`listening on port ${port}`);
    });
