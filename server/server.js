const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose')
require('./config/passport');

const homeRoutes = require('./routes/homeRoutes');
const port = process.env.PORT || 3030;

if(process.env.NODE_ENV !== 'production'){
  var URI = require('./config/config').URI
}

// Setting Connection for mongodb 
const connectDB = async (URI) => {
await mongoose.connect(URI, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});
    console.log('db connected...');
}

// connectDB(process.env.URI || URI);


app.use(logger('dev'))
app.use(homeRoutes);
app.listen(port, (err) => {
    if(err)
        console.log(`Error with server: ${err}`);
    else
        console.log(`Server started at ${port}`);

});