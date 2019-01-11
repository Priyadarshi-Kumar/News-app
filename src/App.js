import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Search from './components/Search'
import './App.css';
class App extends Component {

  updateCount = (count) => {
    this.setState({noOfArticles: count})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Search 
          updateData={this.updateData}
          />
      </div>
    );
  }
}

export default App;
