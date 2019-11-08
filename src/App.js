import React, { Component } from 'react';

export default class App extends Component {
  
        state = {
      value: '',
      array: [],
      error: "",
    
  }
    handleChange =(e)=>{
      this.setState({value: e.target.value});
    
    }

    handleSubmit = (e) =>{ 

      this.setState({error:''})

      if (this.state.value === ""){
        this.setState({error: "Preencha o campo!"})

        e.preventDefault();
         return;  
    }
     
      e.preventDefault();
      

      this.setState(state => {
        const array = state.array.concat(this.state.value);
       
        return {
          array,
        }
      });
      this.setState({value: ''});
      
    };
    
  render() {
    return (
      <div className="mainDiv">
        <form>
          <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
           />
          <button onClick={this.handleSubmit} >OK</button>
          <div className="error">{this.state.error}</div>
          </form>
          <div className="div2">  
        <ul>
        
          {this.state.array.map(nome => (
            <li key={nome} ><input className="checkbox" type="checkbox" />{nome}</li>
            ))}
          </ul>
          </div>  
      </div>
    );
  }
};


