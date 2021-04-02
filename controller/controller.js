const timeFunctions = require('../models/model.js');
const getTime = (req, res) =>{
    const {hora,  timezone} = req.body;
    if(!hora || !timezone) res.status(400).send('One or more required fields');
    const create = timeFunctions.create(req.body);
    res.sendStatus(200); 
}

module.exports = {
    getTime
}