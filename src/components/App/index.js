import React from 'react';
import './App.css';
import Tree from '../Tree';
import {jsonRandomData, jsonSeasonsData } from '../../config';

const App = () => {
  return (
    <div className="App">
      <Tree data={jsonRandomData} header='Random Data'/>
      <Tree data={jsonSeasonsData} header='Seasons'/>
    </div>
  );
}

export default App;
