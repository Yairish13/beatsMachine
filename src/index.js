import React from 'react';
import { StoreContext } from "./StoreContext";
import { storeInstance } from "./StoreProvider";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <div>
      <StoreContext.Provider
       value={storeInstance}>
        <App />
      </StoreContext.Provider>
  </div>,
  document.getElementById("root"),
  
)

;

reportWebVitals();




