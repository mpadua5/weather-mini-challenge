const express = require('express');
const weatherController = require('./controllers/weatherController');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - WeatherForecastRibeiraoPreto
 *     description: Dia(s) que devo sair com o guarda chuva em Ribeirão Preto.
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', weatherController.get);
 
module.exports = router;