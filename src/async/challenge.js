const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (ulr_api) => {
    try {
        const data = await fetchData(ulr_api);
        console.log('numero de personajes: ', data.info.count);

        const character = await fetchData(`${API}${data.results[0].id}`);
        console.log('nombre 1er personaje: ', character.name);

        const origin = await fetchData(character.origin.url);
        console.log('dimension 1er personaje: ', origin.name);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');
