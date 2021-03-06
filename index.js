const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./client/App').default;
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

/*
This is a built-in middleware function in Express.
It serves static files and is based on serve-static
*/


// implementing server side rendering

app.get('*',(req, res) =>{
    const app = ReactDOMServer.renderToString(<App/>);
    fs.readFile(path.resolve(__dirname,'..','..','public','index.html'), 'utf8',(err, data) =>{
        if (err) {
            console.error('Something went wrong:', err);
            res.status(500).send('Oops, better luck next time!');
        }
        res.send(data.replace('<div id="root"></div>',`<div id="root">${app}</div>`))
    })
})

app.use(express.static(path.join(__dirname,'..','client'))); 

app.listen(PORT,((err) =>{ // server listening
    if(err) throw err;
    console.log(__dirname);
    console.log('app listen in PORT: ',PORT);
}))

