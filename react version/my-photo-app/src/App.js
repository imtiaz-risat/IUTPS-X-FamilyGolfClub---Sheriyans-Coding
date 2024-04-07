// App.js
import React from 'react';
import './App.css';
import Cursor from './components/Cursor';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Cursor />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
