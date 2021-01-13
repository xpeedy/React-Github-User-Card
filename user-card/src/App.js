import './App.css';
import React from "react";
import axios from "axios";
import Card from "./components/card"

class App extends React.Component {
  state = {
    usersImg: [],
    name: "",
    followers:[],
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/dustinmyers")
    .then((res) => {
      console.log(res.data)
      this.setState({
        usersImg: res.data.avatar_url,
        name: res.data.name,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  

  render(){
    return (
      <div className="App">
        <img src={this.state.usersImg}></img>
        <h2>{this.state.name}</h2>
        <Card followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
