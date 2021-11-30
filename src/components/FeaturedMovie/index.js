import React from "react";
import "./FeaturedMovie.css";
import Image from "../images/a.jpg";

export default function index({ item }) {
  const firstDate = new Date(item.first_air_date);
  const genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: item.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
          : `url(${Image})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {item.vote_average === 0
                ? "Relevância: N/A"
                : `Relevância: ${item.vote_average * 10}%`}
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons === 1 ? "" : "s"}
            </div>
          </div>
          <div className="featured--descriptions">
            {item.overview !== ""
              ? item.overview
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          </div>
          <div className="featured--buttons">
            <a className="featured--watchbutton" href={`/watch/${item.id}`}>► Assistir</a>
            <a className="featured--mylistbutton" href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </div>
          <div className="featured--genres">
            <strong>Gênero: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
}
