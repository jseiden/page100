var bookController = require('./bookController.js');

module.exports = function(app){
 
 app.post('/postBook', bookController.postBook);

 app.get('/getBooks', bookController.getBooks);

};