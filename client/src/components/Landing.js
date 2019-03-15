import React, { Component } from 'react';
import AddressContext from '../components/context/address-context';
import Information from './Information'


class Landing extends Component {

  static contextType = AddressContext;

  handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    this.context.success(text)
  }

    
  render() {
    return (
      <div className="container">
        
      <div id="homepage">
        <h3 className="center">Find Who you need</h3>
        <div id="customer-container">
        <form id="search" name="contact-form" className="col s12" onSubmit={this.context.handleSubmit} >

            <div className="input-field">
            <input type="text" className="name" id="full_name" onChange={this.handleChange} value={this.props.value} placeholder="Search by Name..." />
            </div>

            <button className="submit btn" type="submit" value="Search" disabled
            > 
            Search
            </button>
               

        </form>
            </div>
        <Information />
    </div>

      </div>
    )
  }
}

export default Landing
