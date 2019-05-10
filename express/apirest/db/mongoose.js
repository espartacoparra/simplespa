const mongoose= require('mongoose');
const conect= mongoose.createConnection('mongodb://127.0.0.1:27017/app',{ useNewUrlParser: true });
module.exports = conect;