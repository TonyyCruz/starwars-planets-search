import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContest';

export default function MyProvider({ children }) {
  const [test, setTeste] = useState('');

  const providerState = {
    test,
    setTeste,
  };
  return (
    <MyContext.Provider value={ providerState }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
