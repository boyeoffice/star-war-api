const createError = require('http-errors');
const express = require('express');
const cors = require('cors');

const env = require('./env');

const routes = require('./route');

// const env = require('./env');

const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb', extended: true }));
app.use(
    express.urlencoded({
        extended: true,
        limit: '50mb',
        parameterLimit: 50000,
    }),
);

// router
app.get('/', (req, res) => {
    res.send({
        status: 'success',
        messages: 'Welcome to star war api.',
    });
});

app.use('/api/v1/', routes);

app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get(env.environment) === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
});

module.exports = app;
