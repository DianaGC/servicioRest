const timeController = require('../controller/controller.js')
const baseUrl = '/api/time';

const routes =  (app) =>{
    app.route(baseUrl).post(timeController.getTime)
}

module.exports = routes;