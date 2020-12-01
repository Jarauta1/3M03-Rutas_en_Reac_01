import './App.css';
import Cabecera from "./cabecera"
import Footer from "./footer"
import Nombres from "./nombres"

import {BrowserRouter, Route} from "react-router-dom"

function App() {

  

  return(<BrowserRouter>
  <Cabecera/>
  <Route exact path="/">
    
  </Route>
  <Route exact path="/nombres">
  <Nombres/>
  </Route>
  <Footer/>
  </BrowserRouter>)
  
}

export default App;

