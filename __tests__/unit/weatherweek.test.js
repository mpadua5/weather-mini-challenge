const { weatherWeekToString } = require('../../src/helpers/util.helper');
describe('WeatherForecast', () => {
    it('should return day of the week according to the date', async() => {
        const listDate = [{
            dt: new Date(),
            average_humidity:80
        }];
        const msg = weatherWeekToString(listDate);
        expect(msg).toEqual(expect.stringContaining('You should take an umbrella in these days:'));
    })

    it('should return specific message if condition date is null', async() => {
        const listDate = [{
            dt: new Date(),
            average_humidity:60
        }];
        const msg = weatherWeekToString(listDate);
        expect(msg).toEqual(expect.stringContaining('You not need an umbrella for some days.'));
    })
});