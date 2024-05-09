const BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
  getProducts: async() => {
    const res = await fetch(BASE+'/products')
    const json = await res.json();
    return json;
  }
}