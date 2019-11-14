import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

export default class App extends Component {
  
  state = {
    value: '',
    array: [],
    error: '',
    arrayAuto: ["jp ", "ives ", "ivisson ", "davo "],
    target: {
      name: '',
      index: null,
    },
  }
    
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }
    
  handleSubmit = (e) => {
    this.setState({error:''})
    if (this.state.value === ''){
      this.setState({error: 'Preencha o campo!'})
      e.preventDefault();
      return;  
    }
    e.preventDefault();
    this.setState(state => {
      const array = state.array.concat(this.state.value);
      return { array }
    });
    this.setState({value: ''});
  };

  handleClick = (nome, index) => {
    this.setState({
      target:{
        name:nome,
        index: index
      }
    });
  }

  deletar = (index) => {
    
    const item = this.state.array.filter((item, idx) => idx !==index);
    
    this.setState({array: item});

    this.setState({name: ''});

  }

  editar = () =>{
    if (this.state.value === ''){
      this.setState({error: 'Preencha o campo para editar o texto'})
     
      return;  
    }
    
    if(this.state.target.index === 0){

    this.state.array.splice(this.state.target.index, this.state.target.index+1, this.state.value)
      
    }else { 
   
    this.state.array.splice(this.state.target.index, this.state.target.index, this.state.value)

    this.setState({ array: this.state.array });
    }
  };

  /*editAuto = (event) =>{
    this.state.arrayAuto.splice(1, 1, "samuel ")
    
    this.setState({ arrayAuto: this.state.arrayAuto });

    event.preventDefault()
  }  */


  render() {
    let alvo;
    if (this.state.target.name !== '') {
   
      alvo = <div className="div3">O que você quer fazer com {this.state.target.name}?
      <div className="btns">
        <button className="delete" onClick={() => this.deletar(this.state.target.index) }>Deletar</button>
        <button className="edit" onClick={() => this.editar()}>Editar</button>
      </div>  
      </div>;
    } else {
      alvo = <div></div>;
    }
    return (
    
      <div className="mainDiv">
        <form>
          <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
           />
            <button className="btn-green" onClick={this.handleSubmit} >OK</button>
           
            <div className="error">{this.state.error}</div>
          </form>
          <div className="div2">  
            <ul>
            
              {this.state.array.map((nome, index) => (
                <li key={index} onClick={() => this.handleClick(nome, index)}>{nome}</li>
              ))}
            </ul>
          </div> 
          {alvo}
          <div>
          <Link to="/">
              <button className="botao-app"> 
                 VOLTAR PARA O MENU INICIAL
              </button>
          </Link>  
          </div>
      </div>
      
    
     
    );
  }
};

