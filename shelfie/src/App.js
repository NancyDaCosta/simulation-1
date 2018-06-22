import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// Components
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {
  constructor(){
    super();
    this.state = {
      results: {},
      inventory: [
        { name: 'Shoes', description: 'Shoes', price: 800, image_url: null},
        { name: 'Pants', description: 'Pants', price: 60, image_url: null },
        { name: 'Jacket', description: 'Jacket', price: 100, image_url: null },
        { name: 'Skirt', description: 'Skirt', price: 60, image_url: null },
      ]
    }
  }

  render() {
    return (
      <div>
        <div>
          <Dashboard />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
