const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const fs = require("fs");

const App = require("./client/App");

const PORT = process.env.PORT || 3000;
const server = express();

app.use("/", (req, res) => {
  fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

app.use( express.static(path.resolve(__dirname,'build'), { maxAge: '30d' }));

server.listen(PORT, () => {
    console.log('server listening in PORT: ', PORT);
})