import "./App.css";
import React, { useState, useEffect } from "react";
import Tmdb from "./Tmdb";

import Header from './components/Header'
import FeaturedMovie from './components/FeaturedMovie'
import MovieRow from './components/MovieRow'

function App() {
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
      const originals = list.filter((i)=>i.slug==='originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
      console.log(chosenInfo)
    };

    loadList();
  }, []);

  useEffect(()=>{
    const isBlackheader = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else{
        setBlackHeader(false);
      }
    }

    window.addEventListener("scroll", isBlackheader); //quando a página é rolada, chama a função isBlackheader

    return ()=>{window.removeEventListener("scroll", isBlackheader);} //quando o componente for desmontado ou removido do DOM 

  }, [])

  return (
    <div className="App">

      <Header black={blackHeader}/>

      {featuredData && 
      <FeaturedMovie item={featuredData}/>}

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤️</span> por Willian Samer.<br />
        Direitos de imagem para Netflix. <br />
        Dados pegos do site themoviedb.org
      </footer>
    </div>
  );
}

export default App;