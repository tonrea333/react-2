import './App.css';

import React, { Component } from 'react'

export class Appinput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
    };
  }

  handleOnEmailInputChange = (event) => {
    console.log(event);
    this.setState({
      email: event.target.value,
    })
  };
  handleFirsNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
  }
  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    })
  }
  handleOnClickSubmit = () => {

  }

  handleOnChange = (event) => {
    //console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (

      <div>
        {console.log(this.state)}
        <label htmlFor="email">Email:</label>
        <input name="email" value={this.state.email} onChange={this.handleOnEmailInputChange}></input>
        <p>{this.state.email}</p>


        <form onSubmit={this.handleOnSubmit}>
          <input name="firstName" value={this.state.firstName} onChange={this.handleFirsNameChange}></input>
          <button>Submit</button>
        </form>


        <input name="lastName" value={this.state.lastName} onChange={this.handleLastNameChange}></input>
        <button onClick={this.handleOnClickSubmit}>Submit</button>


        <form>
          <input name="email" value={this.state.email} onChange={this.handleOnChange}></input>
          <input name="firstName" value={this.state.firstNamel} onChange={this.handleOnChange}></input>
          <input name="lastName" value={this.state.lastName} onChange={this.handleOnChange}></input>
        </form>

      </div>



    );
  }
}

export default Appinput

