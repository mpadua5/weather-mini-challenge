function parseHumidity(data) {
    const info = data.list.map(element => {
        let date = new Date(element.dt * 1000);
        return {
            dt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            humidity: element.main.humidity
        }
    });
    return {
        city: data.city.name,
        info: info
    }
}

function averageHumidity(list) {
    const average = [];
    for (let index in list) {
        if (average.length == 0 ||
            (average.length > 0 &&
                !average.find(element => element.dt.getDate() === list[index].dt.getDate() &&
                    element.dt.getMonth() === list[index].dt.getMonth() &&
                    element.dt.getFullYear() === list[index].dt.getFullYear()
                )
            )
        ) {
            let humidity = list.filter(element => element.dt.getDate() === list[index].dt.getDate() &&
                element.dt.getMonth() === list[index].dt.getMonth() &&
                element.dt.getFullYear() === list[index].dt.getFullYear());
            let averageHumidity = 0;
            for (let value in humidity) {
                averageHumidity += humidity[value].humidity
            }
            // console.log(humidity);
            // console.log(humidity.length);
            average.push({
                dt: list[index].dt,
                average_humidity: averageHumidity / humidity.length
            });
        }
    }
    return average;
}

function weatherWeekToString(list) {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const days = list.filter(item => item.average_humidity > 70);

    if (days.length > 0) {
        let retString = 'You should take an umbrella in these days: '
        for (let value of days)
            retString += `${week[value.dt.getDay()]}, `;
        return `${retString.substr(0, retString.length-2)}.`;
    } else {
        return `You not need an umbrella for some days.`;
    }
}

module.exports = {
    parseHumidity,
    averageHumidity,
    weatherWeekToString
}