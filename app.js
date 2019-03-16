const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demmand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El Clima de ${ coordenadas.direccion } es de ${ temperatura}`;
    } catch (error) {

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);