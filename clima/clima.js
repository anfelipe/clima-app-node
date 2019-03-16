const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3a53fa3a79e07efd9765569fa5e1698a`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}