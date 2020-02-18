const { weatherRibeiraoPreto } = require('../services/openweathermap');
const { parseHumidity,
        averageHumidity,
        weatherWeekToString } = require('../helpers/util.helper');

async function get(req, res) {
    try {
        const {data } = await weatherRibeiraoPreto();
        if (data) {
            const listHumidityForecast = parseHumidity(data);
            const listAverageHumidityByDate = averageHumidity(listHumidityForecast.info);
            res.status(200).send(weatherWeekToString(listAverageHumidityByDate));
        }
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}


module.exports = { get }