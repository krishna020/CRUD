const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = process.env.url;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected');
}).catch((err) => {
    console.log(err);
})

