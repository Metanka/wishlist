import React from 'react';
import Header from './components/Header/Header';
import Input from './components/input/Input';
import List from './components/List/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Input />
    </div>
  );
}

export default App;
