import React from 'react';
import axios from 'axios';
import { Player } from './components/Player';
import { Navbar } from './components/Navbar';

class App extends React.Component {
  constructor(){
    super ();
    this.state ={
      players: [],
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log("data",response)
      this.setState ({
        players: response.data
      })
    
      })
      .catch (error =>{
        console.log("Data not received", error)
    })
  }
  render () {
  return (
    <div className="App">
    </div>
  );
  }
}

export default App;