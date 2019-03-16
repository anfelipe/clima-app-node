const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        //timeout: 1000,
        headers: { 'X-RapidAPI-Key': '90de3f34d5msha455e897baaa3a4p1a9b87jsn5d5db2ab1aae' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}