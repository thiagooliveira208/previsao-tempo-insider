import axios from 'axios';

//https://api.hgbrasil.com/weather?key=ae35ec82&lat=-23.682&lon=-46.875

export const key = 'ae35ec82';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;