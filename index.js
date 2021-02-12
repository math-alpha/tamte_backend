const express = require('express');

require('dotenv').config();

const routes = require('./src/routes');
const cron_worker = require('./src/helpers/cronmander');

app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//
//     next();
// });


app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next();
})

app.use('/api/v1/user', routes.UserRoutes);
app.use('/api/v1/doc', routes.DocRoutes);


app.listen(3000);