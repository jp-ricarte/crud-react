import React, { Component } from 'react';

export default class App extends Component {
  
        state = {
      value: '',
      array: [],
  }
    
    handleChange =(e)=>{
      this.setState({value: e.target.value});
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      console.log(this.state.value);
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
      <div>
      
        <form>
        
          <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
           />
          <button onClick={this.handleSubmit} >OK</button>
          </form>
          <div className="div2">  
        <ul>
          {this.state.array.map(nome => (
            <li key={nome}>{nome}</li>
            ))}
          </ul>
          </div>  
      </div>
    );
  }
};


