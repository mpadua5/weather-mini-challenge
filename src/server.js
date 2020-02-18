const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, (process.env.NODE_ENV == "DEV") ? ".dev.env" : ".env")
});
const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require((process.env.NODE_ENV == "DEV") ? './swagger.dev.json' : './swagger.json');
const swaggerJsdoc = require('swagger-jsdoc');

const port = process.env.PORT;
const app = express();

const swaggerOptions = {
    swaggerDefinition: swaggerDocument,
    apis: [
        path.join(__dirname, 'routes.js')
    ]
}

app.use('/', routes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions)));

console.log(`Listening port: ${port}`);
app.listen(port);