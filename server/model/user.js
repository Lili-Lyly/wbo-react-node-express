const mongoose = require('projet/server/server/model/mongoose')
const shema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }

})

module.exports = mongoose.model('User', shema)
