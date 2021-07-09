import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import Chirp from "./components/Chirp"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", message: "", chirps: [] };
  }
  componentDidMount() {
      console.log("hey");
    setTimeout(() => {
      this.setState({
        chirps: [
          ...this.state.chirps,
          { id: uuidv4(), user: 'Drama4YoMama', message: 'Hit Me Up on Snapchat @SugarDaddiesAnnonymous'},
          { id: uuidv4(), user: 'MikeWazowski', message: `Hey I'm new on ChirpR, i'm a 4' even (s/o to my tall girls) sagitarius ball of fun, looking for someone because Celia left me, has to want kids (human or non)`},
          { id: uuidv4(), user: 'RandomOlCoot', message: 'Back in my day we had Vine, and everything was alright'}
        ],
      });
    }, 20);
  }
  handleBtnClick(e) {
    e.preventDefault();
    console.log(this.state.user);
    console.log(this.state.message);
    this.setState({
      user: "",
      message: "",
      chirps: [...this.state.chirps, { id: uuidv4(), user: this.state.user, message: this.state.message}],
    });
  }
  render() {
    return (
      <>
        <h1 className="text-center">
          <span className="text-primary">Chirp</span>
          <span className="p-1 mb-2 bg-primary border border-primary rounded text-white mt-1">
            R
          </span>
        </h1>
        <div>
          <section
            id="containerForm"
            className="p-1 position-relative top-50 end-0 translate-middle-y"
          >
            <form action="" className="d-flex flex-column">
              <input
                value={this.state.user}
                className="border border-primary"
                placeholder="Username"
                onChange={(e) => this.setState({ user: e.target.value })}
              />
              <textarea
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
                className="border border-primary"
                placeholder="What Tickles Your Fancy"
              ></textarea>
              <button
                onClick={(e) => this.handleBtnClick(e)}
                className="border btn-primary"
              >
                Let The Masses Hear
              </button>
            </form>
          </section>
        </div>
        <div id="timeLine" className="border-primary rounded">
          {this.state.chirps.map(chirp => (
            <li
              className="list-group-item border-primary rounded"
              id="chirpListItem"
              key={uuidv4()}
            >
              <strong>@{chirp.user}</strong>
              <br />
              <br />
              {chirp.message}
            </li>
          ))}
        </div>
        <h1 id="feedback">
          {this.state.user}
          <br />
          <br />
          {this.state.message}
        </h1>
      </>
    );
  }
}

export default App;
