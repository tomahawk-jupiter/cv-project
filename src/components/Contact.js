import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnLabel: 'Edit',
      name: 'Name',
      email: 'email@email',
      phone: '1234567'
    };

    this.editContact = this.editContact.bind(this);
  }

  editContact = () => {
    if (this.state.btnLabel === 'Edit') {
      this.setState({
        btnLabel: 'Submit'
      });
    } else {
      this.setState({
        btnLabel: 'Edit'
      });
    }
  }

  changeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { name, email, phone } = this.state;

   { if (this.state.btnLabel === 'Edit') {
      return(
        <div className="contact-container">
          <button onClick={this.editContact}>{this.state.btnLabel}</button>
          <div>{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
        </div>
      );
    }
    return(
      <div className="contact-container">
        <button onClick={this.editContact}>{this.state.btnLabel}</button>
        <input 
          name="name" 
          type="text" 
          defaultValue={name} 
          onChange={this.changeText}
        ></input>
        <input 
          name="email" 
          type="text" 
          defaultValue={email} 
          onChange={this.changeText}
        ></input>
        <input 
          name="phone" 
          type="text" 
          defaultValue={phone} 
          onChange={this.changeText}
        ></input>
      </div>
    )}

  }
}

export default Contact;