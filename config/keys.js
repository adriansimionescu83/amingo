
// If your app is in production (i.e. Heroku), check production 
if(process.env.NODE_ENV == "production"){
    module.exports = require('./keys_prod')
    //Otherwise, if your app is running in working environment(your laptop)
}else{
    module.exports = require('./keys_work')
}