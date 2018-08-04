import React, { Component } from 'react';
import Colors from "./Colors";
import Change from "./Change";
import ShowModal from "./ShowModal"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Colors />
        <Change /> 
        <ShowModal />
      </div>
    );
  }
}

export default App;

