import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

import AllArtists from "./components/AllArtists/AllArtists";
import ArtistDetail from "./components/AllArtists/ArtistDetail/ArtistDetail";

class App extends Component {
  constructor() {
    super();

    this.apiUrl = "http://localhost:3000/api/artists";

    this.state = {
      artists: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(this.apiUrl);
    this.setState({ artists: response.data.artists });
  }

  addArtist = async (event) => {
    event.preventDefault();

    const response = await axios.post(this.apiUrl, {
      name: event.target.name.value
    });

    event.target.name.value = '';

    const tempArtists = this.state.artists;
    tempArtists.push(response.data.artist);

    this.setState({ artists: tempArtists });
  };

  addSong = async (event) => {
    event.preventDefault();

    const artistId = event.target.artistId.value;
    const songUrl = `${this.apiUrl}/${artistId}/newsong`;

    const response = await axios.post(songUrl, {
      title: event.target.title.value
    });

    const artistRes = response.data.artist;
    const tempArtists = this.state.artists;

    const newArtists = tempArtists.map(artist => {
      if(artist.id == artistRes.id) {
        return artistRes;
      } else {
        return artist;
      }
    });

    this.setState({ artists: newArtists });
  };

  render() {
    return (
      <div className="App">
        <h1>Muse App for Music!</h1>

        <nav>
          <Link to='/'>Home</Link> | <Link to='/artists'>All artists</Link>
        </nav>

        <Switch>
          <Route 
            path="/artists" 
            exact 
            component={() => <AllArtists 
              artists={this.state.artists}
              addArtist={this.addArtist}
            />} 
          />

          <Route
            path="/artists/:id" 
            component={(routerProps) => <ArtistDetail 
              {...routerProps}
              artists={this.state.artists}
              addSong={this.addSong}
            />} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
