const express = require('express');
const routes = require('./routes.js');

const app = express();
app.use(routes);
app.use(express.json);

app.listen('3000', () => {
  console.log('Server Started');
});
