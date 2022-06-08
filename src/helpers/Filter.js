const DEFAULT_FILTER = [{
  reference: '',
  operation: '',
  number: '',
}];

export default function Filter(data = [], filters = DEFAULT_FILTER) {
  // const [filteredData, setFilteredData] = useState(data);
  // console.log('useFilter', filters);
  const checkSmaller = (testIt, { reference, number }) => testIt[reference] < number;
  const checkEqual = (testIt, { reference, number }) => testIt[reference] === number;
  const checkBigger = (testIt, { reference, number }) => testIt[reference] > number;

  const filtredData = data.filter((d) => filters.every((f) => {
    if (f.operation === 'smaller') { return checkSmaller(d, f); }
    if (f.operation === 'equal') { return checkEqual(d); }
    if (f.operation === 'bigger') { return checkBigger(d); }
    return true;
  }));
  console.log('filter', filtredData);
  return filtredData;
}
