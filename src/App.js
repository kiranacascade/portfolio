import React, { Component } from 'react';
import Navbar from './component/navbar';
import Main from './component/main';
import Footer from './component/footer';
import './css/style.css';

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
