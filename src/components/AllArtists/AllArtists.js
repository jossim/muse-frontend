import React from "react";
import "./AllArtists.css";
import { Link } from "react-router-dom";

export default function AllArtists(props) {
  const artists = props.artists.map((artist) => {
    return (
      <li key={artist.id}>
        <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
      </li>
    );
  });

  return (
    <div className="AllArtists">
      <h2>All Artists</h2>

      <form onSubmit={props.addArtist}>
        <input type="text" name="name" />
        <input type="submit" value="Add Artist" />
      </form>

      <ul>{artists}</ul>
    </div>
  );
}
