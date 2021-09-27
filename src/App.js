import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      aa : '',
      bb : '',
    }
  }

  componentDidMount() {
    this._getHost();
  }

  _getHost = async() => {
    const res = await axios.get('/api/host');
    console.log(res.data);
    this.setState({ aa : res.data.host })
    this.setState({ bb : res.data.kate })
  }

  render() {
    return(
      <div className='App'>
        <h3> Welcome to <u> {this.state.aa} </u> Blog! 
        {this.state.bb} </h3>
      </div>
    )
  }
}

export default App;

