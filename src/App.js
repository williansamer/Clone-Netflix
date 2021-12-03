import "./App.css";
import React, { useContext } from "react";
import { Context } from "./components/Context/ContextAPI";

import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieRow from "./components/MovieRow/";

function App() {
  const { featuredData, movieList } = useContext(Context);
  //const movieList  = useContext(Context);

  return (
    <div className="App">
      <Header />

      {featuredData && <FeaturedMovie />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          ❤️
        </span>{" "}
        por Willian Samer.
        <br />
        Direitos de imagem para Netflix. <br />
        Dados pegos do site themoviedb.org
      </footer>

      {movieList <= 0 && (
        <div className="loading">
          <img
            src="https://i.gifer.com/origin/36/36527397c208b977fa3ef21f68c0f7b2.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}

export default App;
