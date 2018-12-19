const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const router = require('./routes/router');
const app = express();

// set necessary settings
app.set('port', 9001);

// middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(router);

// start server
app.listen(app.get('port'), () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Listening on ${app.get('port')}...`); // eslint-disable-line
    }
});
