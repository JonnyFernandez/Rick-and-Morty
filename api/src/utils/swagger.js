const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('../routes/auth.routes.js')
const path = require('path');


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Rick and Morty API REST ',
            version: '1.0.0',
            description: 'Api rest made by GoodNight',
        },
    },

    apis: [
        path.join(__dirname, '../routes/auth.routes.js'),
        path.join(__dirname, '../routes/character.routes.js'),
        path.join(__dirname, '../routes/myChars.routes.js'),
        path.join(__dirname, '../routes/fav.routes.js'),
    ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };
