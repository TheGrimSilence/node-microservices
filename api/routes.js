const controller = require('./controller')

module.exports = (app) => {
    app.route('/about').get(controller.about);
    app.route('/distance/:zipCode1/:zipCode2').get(controller.getDistance);
}
