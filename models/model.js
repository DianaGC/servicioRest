var fs = require('fs');

const create = (data) =>{
const {time, timeZone} = data;
const response = {
    "response": {
        "time": time,
        "timezone": "utc"
        }
}

const jsonString = JSON.stringify(response);
fs.write('../time.json', jsonString, err => {
    err ? console.log('Error writing file', err) : console.log('Successfully wrote file');
})


}
module.exports = {
    create
}