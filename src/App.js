import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

import api from './services/api';

export default class App extends Component {

  renderRow(notes){
    return (<li key={notes}>{notes}
            <button className="delete" >Deletar</button>
            <button className="edit" >Editar</button></li>)
    }
  
  state = {
    value: '',
    array: [],
    notes: [],
    error: '',
    target: { name: '', index: null, },
  }

  atualizarNomes(e) {
  api.get(`notes`)
  .then(response => {

  console.log(response.data);
  
    for( var i=0; i < response.data.length; i++){ 
      const notes = this.state.notes.concat(response.data[i].content);
      this.setState({ notes: notes }) 
    };
  });
}

  componentDidMount(){
    this.atualizarNomes();
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
      const notes = state.notes.concat(<li>{this.state.value}</li>);

      return { notes }
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
  
  
  render() {
  
    let alvo;
     
    if (this.state.target.name !== '') {
      
      alvo = <div className="div3">O que você quer fazer com {this.state.target.name}?
      <div className="btns">
        <button className="delete" onClick={() => this.deletar(this.state.target.index)}>Deletar</button>
        <button className="edit" onClick={() => this.editar()}>Editar</button>
      </div>  
    </div>
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
          placeholder="Digite um nome"
           />
            <button className="btn-green" onClick={this.handleSubmit} >Submit</button>
           
            <div className="error">{this.state.error}</div>
          </form>
          <header className="div2">  
            <ul>
                {this.state.notes.map(this.renderRow)}
            </ul>
          </header> 
          {alvo}

          <div className="inicial">
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

