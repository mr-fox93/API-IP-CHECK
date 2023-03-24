import { Component } from "react";

class App extends Component {
  state = {
    ip: "",
    isClicked: false,
  };

  handleClick = () => {
    fetch(` https://api.ipify.org/?format=json`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          ip: data.ip, // dostęp do właściwości "ip" z obiektu "data"
          isClicked: true,
        })
      );
  };

  clearBtn = () => {
    this.setState({
      ip: "",
    });
  };

  render() {
    return (
      <div className="container">
        <button className="button" onClick={this.handleClick}>
          CHECK YOUR IP
        </button>
        <button className="button" onClick={this.clearBtn}>
          CLEAR
        </button>
        {this.state.isClicked && <p className="show">{this.state.ip}</p>}
      </div>
    );
  }
}
export default App;

// test
