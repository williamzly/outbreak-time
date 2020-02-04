import React from 'react';
import './App.css';
import { renderRoutes } from "react-router-config";
import routes from './routes'
import { HashRouter } from "react-router-dom";

function App() {



  return (
      <HashRouter>
        <div className="App">
          {renderRoutes(routes)}
        </div>
      </HashRouter>
  );
}

export default App;
