const { create } = require('autorest');
const express = require('express');// you 

const app = express(); // need

const answerKey =
[
    first = '',
    Look = 'Look',
    Snd = 2,
    Three = 3,
    Four = 4,
    To = 'To',
    Six = 6,
    Seven = 7,
    art = 'The',
    Gate = 'Gate',
    Of = 'Of',
    Sky = 'Sky'
];

// port listener
app.listen(3000, function() {
    console.log('Listen on port 3000'); // these 
});

// magic here // Mount routes
app.get('/', function(req, res)
{
    var url = req.url;
    res.send(`<h1>Hello User! Look > type /Look into the url at the end</h1>` + url +"< not here");
});

app.get('/Look', function(req, res){
    var e = 'Next lesson? How many people does it take to make a baby?';
    res.send(`${e} slash then number and dash`);
});

app.get('/2', function(req, res){
    var e = 'How many Irregular Hunters are there? 1 man 2 or more?';
    res.send(`${e} < /type a number`);
});

app.get('/3', function(req, res){
    var e = 'Lonely. Very. Lonely. 3 is a crowd but.. What comes next?';
    res.send(`${e}`);
});

app.get('/4', function(req, res){
    var e = 'To > People in a room. Legendary 4 heroes. Family is gone. Time to save the world';
    res.send(`${e}`);
});

app.use('/To', function(req, res){
    var e = 'Pentagon, -agon';
    res.send(`${e}`);
});

app.use('/6', function(req, res){
    var e = 'For(Y) Or Against this number? You would be apart of them..(N)';
    res.send(`${e}`);
});

app.use('/7', function(req, res){
    var e = 'Are you a simpleton or a genius? What is the most commonly used article in grammar?';
    res.send(`${e}`);
});

app.use('/The', function(req, res){
    var e = 'I am full of food. Imma just shut the...';
    res.send(`${e}`);
});

app.use('/Gate', function(req, res){
    var e = `What rymes with Fly Or what Am I made..?`;
    res.send(`${e}`);
});

app.get('/Of', function(req, res){
    res.send(`Cannot GET /`);
});

app.get('/Sky', function(req, res){
    var e = 'https://www.youtube.com/watch?v=dYvxEh2gkSY'; // <- you dont know this song
    res.redirect(`${e}`);
});