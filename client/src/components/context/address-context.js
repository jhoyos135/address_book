import React from 'react';

export default React.createContext({
    search: '',
    customer: [],
    handleSubmit: (e) => {},
    success: () => {},
    getCurrentPerson: (name) => {}
  
});