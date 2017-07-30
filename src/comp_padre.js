import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Funcional1 from './componentes/comp_hijo_funcional_1'
import Funcional2 from './componentes/comp_hijo_funcional_2'
import Funcional3 from './componentes/comp_hijo_funcional_3'

const nombre_padre = 'Darth Vader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          
          <h2>REACT DESDE 0</h2>
        
        </div>

        <br/>

        <Funcional1 nombre_padre={nombre_padre} />

        <Funcional2 nombre_padre={nombre_padre}/>

        <Funcional3 />

      </div>
    );
  }
}

export default App;
