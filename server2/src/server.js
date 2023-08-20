const express = require('express');
const routes = require('../routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen('3344', console.log("Server on in door 3344"));
