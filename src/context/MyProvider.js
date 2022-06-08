import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import useApi from '../hooks/useApi';
import Filter from '../helpers/Filter';

export default function MyProvider({ children }) {
  const [apiData, setApiData] = useState([]);
  const [filters, setFilters] = useState([]);

  const data = useApi('https://swapi-trybe.herokuapp.com/api/planets/');

  console.log('myProvider', apiData);

  useEffect(() => {
    const filtredData = Filter(data.results, filters);
    setApiData(filtredData);
  }, [data.results, filters]);

  const providerState = {
    setFilters,
    apiData,
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
