const config = require('./config')
const express = require('express');
const app = express();
const { requireAuth } = require('./utils/auth')
require('./config/express')(app)
    //require('./config/mongodb')(app)
require('./config/mongoose')(app)
const routes = require('./routes')
app.use(routes)



app.listen(config.development.port, () => console.log("Running server"));