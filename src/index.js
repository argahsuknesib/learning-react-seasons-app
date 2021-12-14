import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { lat: null, lon: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ lon: position.coords.longitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lon){
        return <div>Error : {this.state.errorMessage} </div>
    }
    
    if (!this.state.errorMessage && this.state.lat && this.state.lon){
        return <div>Latitude : {this.state.lat} <br/>Lonitude : {this.state.lon} </div>
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
