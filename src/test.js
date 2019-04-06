import React, { Component } from 'react';
class MyForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/add-user', {
          method: 'post',
          body: JSON.stringify({
            name: data.get('name'),
            email: data.get('email'),
            country: data.get('country')
          }),
          headers:{
            'Content-Type': 'application/json'
          }
        });
    console.log(data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="country">Enter your birth date</label>
        <input id="country" name="country" type="text" />

        <button>Send data!</button>
      </form>
    );
  }
}

export default MyForm;