import React, { useEffect, useState } from 'react';
import getData from './DataController/DataController';
import Card from './Components/Card';
import { Data } from './Constants/Interfaces';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isReadyData, setIsReadyData] = useState(false);
  
  useEffect(() => {
    getData('people', setData, setIsReadyData);
  }, [])
  // console.log(isReadyData);
  
  return (
    <div className="App">
      <div className='CardWrapper'>
        {isReadyData && 
          <Card data={data}></Card>}
      </div>
    </div>
  );
}

export default App;
