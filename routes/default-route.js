'use strict';

module.exports = function(app, cache, sockets) {
    var controller = require('../controllers/default-controller')

    app.route('/')
        .get(controller.hello)

    app.route('/demo')
        .get(controller.demo)
}