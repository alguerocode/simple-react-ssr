const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./client/App').default;
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname,'build','client')));

app.get('*',(req, res) =>{
    const app = ReactDOMServer.renderToString(<App/>);
    fs.readFile(path.resolve(__dirname,'public','index.html'), 'utf8',(err, data) =>{
        if (err) {
            console.error('Something went wrong:', err);
            res.status(500).send('Oops, better luck next time!');
        }
        res.send(data.replace('<div id="root"></div>',`<div id="root">${app}</div>`))
    })
})

app.listen(PORT,((err) =>{
    if(err) throw err;
    console.log('app listen in PORT: ',PORT);
}))

