const express = require('express');
const routes = require('./routes/routes.js');
const app = express();
const port = process.env.PORT || 8001;

app.use(express.json);
routes(app);
app.listen(port, ()=> console.log(port))
