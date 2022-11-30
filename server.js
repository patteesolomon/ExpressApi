const { create } = require('autorest');
const express = require('express');// you 

const app = express(); // need

const fs = require('fs');

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

app.engine('answer', (filePath, options, callback) =>
{
    fs.readFile(filePath, (err, content) => {
        if (err)
        {
            return callback(err);
        }
        // view engine
        const rendered = content.toString()
        .replace('#message#', '<header>' + options.message + '</header>')
        .replace('#content#', '<body>' + options.content + '</body>')
        .replace('#message#', '<footer>' + options.content);
        // string stuff woooo
        return callback(null, rendered);
    });
});

app.set('views', './views');
app.set('view engine', 'answer');
// loop through the array above the way through the template....

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
    res.render('tem', {message:`${e} smash the number and dash`, content: answerKey[2]});
});

app.get('/2', function(req, res){
    var e = 'How many Irregular Hunters are there? 1 man 2 or more?';
    res.render('tem', {message: `${e} < /type a number`, content: answerKey[3]});
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
    res.render('tem2',{message: `${e}`});
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
    res.send(`Cannot GET / Object: Soul?`);
});

app.get('/Sky', function(req, res){
    var e = 'https://www.youtube.com/watch?v=dYvxEh2gkSY'; // <- you dont know this song
    res.redirect(`${e}`);
});