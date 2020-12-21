
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log('numero de personajes: ', data.info.count);
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        console.log('nombre 1er personaje: ', data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log('dimension 1er personaje: ', data.dimension);
    })
    .catch(err => console.error(err));
