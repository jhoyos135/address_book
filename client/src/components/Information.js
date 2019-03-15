import React, { Component } from 'react'
import AddressContext from '../components/context/address-context';
import Single from './Single'

class Information extends Component {

    static contextType = AddressContext;
    renderCustomer = () => {
        let customer = this.context.customer;
        if(customer.length !== 0) {
            
        return customer.map(single => (
            <Single key={single._id} single={single} />
        ))  
    }
}

  render() {
    return (
    <div id="information">
    {this.renderCustomer()} 
    </div>
    )
  }
}

export default Information
