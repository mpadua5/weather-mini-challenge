const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, (process.env.NODE_ENV == "DEV") ? "../../src/.dev.env" : "../../src/.env")
});
const {weatherRibeiraoPreto} = require('../../src/services/openweathermap');

describe('OpenWeatherService', () => {
    it('should return data regarding the weather forecast', async () => {
        const request = await weatherRibeiraoPreto();
        expect(request.status).toBe(200);
    })
})