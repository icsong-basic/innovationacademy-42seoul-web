const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'https://42seoul-test.azy.kr/',
            changeOrigin: true
        })
    );
    app.get('/time', function (req, res) { res.set('Content-Type', 'application/json'); res.send(JSON.stringify({ time: Date.now() })) })
};