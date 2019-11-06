import React, { Component } from 'react';



export default class App extends Component {

    state = {
      value: ''
    };
  
    handleChange =(e)=>{
      this.setState({value: e.target.value});
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      console.log(this.state.value);
 
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
           />
          <button onClick={this.handleSubmit}>OK</button>
        </form>
      </div>
    );
  }
}
;

