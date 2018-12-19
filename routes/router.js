const { Router } = require('express');
const { reducer } = require('../utils');
const mime = require('mime');
const router = Router();

// We're going to assume that these come from an API
// We're also asuming that these come already with the right
// case otherwise we would need to do a "lowercase" comparison
const { settings, components } = require('../utils/stubs');

const CONTENT_TYPES = {
    text: mime.getType('.txt'),
    json: mime.getType('.json')
};

// home route
// we redirect to the reducr route here
router.route('/')
    .get((req, res) => {
        res.redirect('/reducr');
    });


// reducr route
router.route('/reducr')
    .get((req, res) => {
        const reducedSettings = {
            results: reducer(settings, components)
        };

        res
            .status(200)
            .set('Content-Type', CONTENT_TYPES.json)
            .json(reducedSettings);
    });

// 404 handler
router.use((req, res) => {
    res
        .status(404)
        .set('Content-Type', CONTENT_TYPES.text)
        .send('404 Not Found :(');
});

// error handler
/* eslint-disable */
router.use((err, req, res, next) => {
    console.error(err.stack);
    
    res
        .status(500)
        .send('Oops, something went wrong. Please try again later.');
});
/* eslint-enable */

module.exports = router;
