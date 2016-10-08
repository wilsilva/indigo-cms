'use strict'
const config = require('./config');
const models = require('./models');
const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const article = require('./routes/article');
const user = require('./routes/user');

let app = express();

//setting port used to application
app.set('port',config.http_port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routing application
// URL root: /api
app.use('/api/',index);
app.use('/api/article/',article);
app.use('/api/users',user);

models.sequelize.sync().then(() => {
    let server = app.listen(app.get('port'),function(){
        console.log('Express server listening port',server.address().port);
    });
}).catch((error) => {
    console.error(error);
});
