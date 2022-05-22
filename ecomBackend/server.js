require('dotenv').config({path: "config/config.env"});

const app = require('./app');

const connectDatabase = require('./config/database');

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`server start on port ${process.env.PORT}`);
});