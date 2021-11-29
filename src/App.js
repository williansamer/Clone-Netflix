import "./App.css";
import React, { useState, useEffect } from "react";
import Tmdb from "./Tmdb";

import MovieRow from './components/MovieRow'

function App() {
  const [moveList, setMoveList] = useState([]);

  useEffect(() => {
    const loadList = async () => {
      const list = await Tmdb.getHomeList();
      console.log(list);
      setMoveList(list);
    };

    loadList();
  }, []);

  return (
    <div className="App">
      <section className="lists">
        {moveList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;