import {useState, useEffect} from 'react'

import Tmdb from "../../../Tmdb";

export default function useMovie() {

    const [blackHeader, setBlackHeader] = useState(false);
    const [featuredData, setFeaturedData] = useState(null);
    const [movieList, setMovieList] = useState([]);
  
    useEffect(() => {
      const loadList = async () => {
        //Pegando a lista
        const list = await Tmdb.getHomeList();
        console.log(list);
        setMovieList(list);
  
        //Pegando o filme em destaque
        const originals = list.filter((i) => i.slug === "originals");
        const randomChosen = Math.floor(
          Math.random() * (originals[0].items.results.length - 1)
        );
        const chosen = originals[0].items.results[randomChosen];
        const chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
  
        setFeaturedData(chosenInfo);
        console.log(chosenInfo);
      };
  
      loadList();
    }, []);
  
    useEffect(() => {
      const isBlackheader = () => {
        if (window.scrollY > 10) {
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }
      };
  
      window.addEventListener("scroll", isBlackheader); //quando a página é rolada, chama a função isBlackheader
  
      return () => {
        window.removeEventListener("scroll", isBlackheader);
      }; //quando o componente for desmontado ou removido do DOM
    }, []);

    
    return {blackHeader, featuredData, movieList}
}
