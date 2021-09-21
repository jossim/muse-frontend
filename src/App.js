import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

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

  addArtist = async () => {};
  addSong = async () => {};

  render() {
    return (
      <div className="App">
        <h1>Muse App for Music!</h1>
        <Switch>
          <Route path="/artists" component={AllArtists} />
        </Switch>
      </div>
    );
  }
}

export default App;
