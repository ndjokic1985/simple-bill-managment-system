const express = require('express');
const Database = require('./db/Database');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

const billTypes = require('./routes/billtypes');
const db = new Database();

app.use('/api/v1/admin/bill-types', billTypes);
db.connect()
    .then(() => {
        app.listen(port, console.log(`Server is listening on port ${port}..`))
    }).catch((err) => {
        console.log(err);
    });