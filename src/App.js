import "./App.css";
import React, { useState, useEffect } from "react";
import Tmdb from "./Tmdb";

import FeaturedMovie from './components/FeaturedMovie'
import MovieRow from './components/MovieRow'

function App() {
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

  return (
    <div className="App">

      {featuredData && 
      <FeaturedMovie item={featuredData}/>}

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;