const express    = require('express');
const connection = require('../app/database/mysqlConnection.js');
const routes     = require('./routes/index.js');

require('dotenv').config();

const app = express();
app.use(express.json());

console.log('================== Starting Server ====================');

app.use('/api/v1/', routes);

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`server running at port: ${port}`));