const express = require('express');
const path = require('path');
const app = express();
app.use(express.static("./public"));
app.listen(8000, function() {
 console.log('App listening at port 8000;');
});