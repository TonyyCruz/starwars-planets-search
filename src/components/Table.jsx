import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import useFilter from '../hooks/useFilter';

export default function Table() {
  const [tableData, setTableData] = useState([]);

  const apiData = useApi('https://swapi-trybe.herokuapp.com/api/planets/');
  const filtredData = useFilter(apiData.results);

  useEffect(() => {
    setTableData(filtredData);
  }, [setTableData, filtredData]);
  console.log('Table component', tableData);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tfoot>
        {tableData && tableData.map((field) => (
          <tr key={ field.name }>
            <td>{ field.name }</td>
            <td>{ field.rotation_period }</td>
            <td>{ field.orbital_period }</td>
            <td>{ field.diameter }</td>
            <td>{ field.climate }</td>
            <td>{ field.gravity }</td>
            <td>{ field.terrain }</td>
            <td>{ field.surface_water }</td>
            <td>{ field.population }</td>
            <td>{ field.films }</td>
            <td>{ field.created }</td>
            <td>{ field.edited }</td>
            <td>{ field.url }</td>
          </tr>
        ))}
      </tfoot>
    </table>
  );
}
