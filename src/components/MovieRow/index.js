import React from "react";
import "./MovieRow.css";

export default function MovieRow({ title, items }) {
  
  const [scrollX, setScrollX] = React.useState(0);

  function handleClickLeft(){
    let x = scrollX + (window.innerWidth / 2)
    
    if(x > 0){
      x = 0;
    }
    setScrollX(x);
    
  }
  function handleClickRight(){
    let x = scrollX - (window.innerWidth / 2);
    let listW = items.results.length * 150
    if(window.innerWidth - listW > x){
      x = (window.innerWidth - listW) - 60; // -60 da largura das setas de scroll
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div onClick={handleClickLeft} className="movieRow--arrow--left">˂</div>
        <div onClick={handleClickRight} className="movieRow--arrow--right">˃</div>

        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150,
          transition: 'margin-left 0.5s'
        }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="movieRow--item" key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
