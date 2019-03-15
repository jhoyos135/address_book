import React, { Component } from 'react';
import AddressContext from './address-context';

class GlobalState extends Component {

  _isMounted = false;
  
  state = {
    search: '',
    customer: []
  }

getCurrentPerson = async (name) => {
  this._isMounted = false;

    let url = `/api/customers/${name}`;
    let res = await fetch(url);
    let data = await res.json();
    this.setState({
      customer: data
    })
};

success = (text) => {
  let submit = document.querySelector('.submit');
    if(text < 1) {
      submit.setAttribute('disabled', true)
      this.setState({
        customer: []
      })
    } else {
      submit.removeAttribute('disabled')
    }
    this.setState({
      search: text
    })
};

handleSubmit = (e) => {
  let name = this.state.search;
  e.preventDefault();
  this.getCurrentPerson(name);
};

  render() {
    return (
     <AddressContext.Provider
      value={{
        search: this.state.search,
        customer: this.state.customer,
        getCurrentPerson: this.getCurrentPerson,
        success: this.success,
        handleSubmit: this.handleSubmit
      }}
     >

       {this.props.children}
     </AddressContext.Provider>
    )
  }
}

export default GlobalState
