const API_KEY = "5de05f3f8f39cd811fd774a507ac8d0c";
const BASE_URL = "https://api.themoviedb.org/3";

const basicFetch = (async(endPoint)=>{

    const req = await fetch(`${BASE_URL}${endPoint}`)
    const json = await req.json();
    return json;
})

export default {
  getHomeList: async  () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "documentary",
        title: "Documentários  ",
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
      }
    ];
  },
  getMovieInfo: async (id, type)=>{
    let info = {};

    if(id){
        switch (type) {
            case 'movie':
                info = await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`);
                break;
            case 'tv':
                info = await basicFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`);
                break;
            default:
                info = null;
                break;
        }
    }
    return info;
  }
};
