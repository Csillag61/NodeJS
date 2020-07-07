const express = require('express');
const http =  require('http');
const morgan = require('morgan');
const bodyParser = require(' body-parser');

const hostname = 'localhost';
const port = 3000;

const  app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) =>{
    res.statusCode =200;
    res.setHeader('Content-Type', 'text-plain');
    next();
} );

app.get('/dishes', (req,res,next)=>{
    res.end("will send all the dishes")
});

app.post('/dishes', (req,res,next)=>{
    res.end('will add the dish: ' + req.body.name + ' with details: ' + RegExp.body.description);
});

app.put('/dishes', (req,res,next) => {
    res.statusCode = 403;
    res.end('pot is not supported');
})

app.delete('/dishes', (req,res,next)=>{
    res.end("deleting all")
});

app.get('/dishes:dishId', (req,res,next)=>{
    res.end("will send details: "+ req.params.dishId + 'to you')
});

app.post('/dishes:dishId', (req,res,next)=>{
    res.statusCode = 403;
    res.end('post is not supported: ' + req.params.dishId);
});

app.put('/dishes: dishId', (req,res,next) => {
    res.write('Updating' = reg.params.dishId + '\n');
    res.end('will update the dish:' + req.body.name + req.body.description);
})

app.delete('/dishes:dishId', (req,res,next)=>{
    res.end("deleting dish:" = rex.body.description);
});

app.use(express.static(_dirname+ '/public'));

app.use((req, res, next)=> {
    res.statusCode= 200;
    res.setHeader('Contant-Type', 'text=html');
    res.end('<html><body><h1>This is an express server</h1></body></html>')
});
