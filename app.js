'use strict'
const config = require('./config/env');
const models = require('./app/models');
const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

let app = express();

//setting port used to application
app.set('port',config.http_port);

//routing application
// URL root: /api
app.use('/api/',indexRouter);
app.use('/api/users',userRouter);
app.use('/api/posts/',postRouter);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

models.sequelize.sync().then(() => {
    let server = app.listen(app.get('port'),function(){
        console.log('Express server listening port',server.address().port);
    });
}).catch((error) => {
    console.error(error);
});
