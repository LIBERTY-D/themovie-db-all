import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Events } from './ContextApi/Events.tsx'
import {MakeMoviesAvailable} from "./ContextApi/MakeMoviesAvailable.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <MakeMoviesAvailable>
  <Events>
   
    <App />
 
  </Events>
  </MakeMoviesAvailable>
  </React.StrictMode>
)
