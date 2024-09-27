import './App.css'
import React from 'react';
import ItemAdder from './components/ItemAdder.jsx';
import ItemList from './components/ItemList.jsx';
import ItemCounter from './components/ItemCounter.jsx';




function App() {


  return (
    <div>
    
    <ItemAdder />
    <ItemList />
    <ItemCounter />
  </div>
  )
}

export default App
