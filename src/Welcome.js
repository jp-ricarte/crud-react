import React, { Component } from 'react';
import './Welcome.css'
import logo from './logo.png';
import { Link } from 'react-router-dom'


export default class Welcome extends Component {
  render() {
    return (
        <div className="div">
            <h1 className="first">Bem vindo</h1>
            <h1>ao meu Crud em</h1>
                <div className="alignImg">
                    <h1 className="react">React</h1>
                    <img className="logo" src={logo} alt="logo" />
                  </div>
                  <div  className="link">
                  <Link to="/App">
                    <button className="botao"> 
                        INICIAR!
                    </button>
                  </Link>  
                  </div>
         </div>
    );
  }
}
