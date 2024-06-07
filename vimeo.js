import axios from 'axios';

const API_KEY = 'bff2a7ffc0e32f9f5f49c7ee2268e922';

export const buscarVideos = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      params: {
        query: query,
        per_page: 10
      },
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });
    return pesquisa.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos do Vimeo:', erro);
    throw erro;
  }
};
