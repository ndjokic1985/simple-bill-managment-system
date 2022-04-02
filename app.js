const express = require('express');
const Database = require('./db/Database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

const billTypes = require('./routes/billtypes');
const bill = require('./routes/bill');
const db = new Database(process.env.MONGO_URI);

app.use('/api/v1/admin/bill-types', billTypes);
app.use('/api/v1/bills', bill)
db.connect()
    .then((data) => {
        app.listen(port, console.log(`Server is listening on port ${port}..`))
    }).catch((err) => {
        console.log(err);
    });