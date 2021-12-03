import React, { useContext } from 'react'
import {Context} from '../Context/ContextAPI';

import "./FeaturedMovie.css";
import Image from "../../images/a.jpg";

export default function FeaturedMovie() {

  const {featuredData} = useContext(Context);

  const firstDate = new Date(featuredData.first_air_date);
  const genres = [];
  for (let i in featuredData.genres) {
    genres.push(featuredData.genres[i].name);
  }

  let description = featuredData.overview;
  if(description.length > 217) {
    description = description.substring(0, 217) + "...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: featuredData.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${featuredData.backdrop_path})`
          : `url(${Image})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{featuredData.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {featuredData.vote_average === 0
                ? "Relevância: N/A"
                : `Relevância: ${featuredData.vote_average * 10}%`}
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {featuredData.number_of_seasons} temporada
              {featuredData.number_of_seasons === 1 ? "" : "s"}
            </div>
          </div>
          <div className="featured--descriptions">
            {description !== ""
              ? description
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          </div>
          <div className="featured--buttons">
            <a className="featured--watchbutton" href={`/watch/${featuredData.id}`}>► Assistir</a>
            <a className="featured--mylistbutton" href={`/list/add/${featuredData.id}`}>+ Minha Lista</a>
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
