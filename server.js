require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser')

//local module
const dbConnection = require('./db')
const router = require('./routes');

dbConnection();

const PORT = process.env.PORT || 5555;

app.use(cors())
app.use(bodyParser.urlencoded({extended: false,}))
app.use(bodyParser.json())
app.use(router);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})