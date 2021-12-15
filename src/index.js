import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends React.Component {

  state = {lat : null, lon: null, errorMessage : ""};

  componentDidMount() {
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
      return <SeasonDisplay lat = {this.state.lat} lon = {this.state.lon}/>
    }

    return <Spinner />
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
