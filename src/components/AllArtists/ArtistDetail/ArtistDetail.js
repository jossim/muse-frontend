import React from "react";
import "./ArtistDetail.css";

export default function ArtistDetail(props) {
  const artist = props.artists.find(artist => {
    return artist.id == props.match.params.id;
  });

  console.log(artist);

  const songs = artist.Songs.map(song => <li key={song.id}>{song.title}</li>);

  return (
    <div className="ArtistDetail">
      <h2>{artist.name}</h2>

      <h3>Songs</h3>

      <form onSubmit={props.addSong}>
        <input type='hidden' name='artistId' value={artist.id} />
        <input type='text' name='title' />
        <input type='submit' value='Add Song' />
      </form>
      <ul>{songs}</ul>
    </div>
  );
}
