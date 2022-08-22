import { useEffect, useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import getData from './DataController/DataController';
import { CARDS_PER_PAGE } from './Constants/Constants';
import { filterInputData, useDebounce } from './Utils/Utils';
import Main from './Components/Pages/Main/Main';
import { Container } from 'react-bootstrap';
import Navigation from './Components/Navigation/Navigation';
import Details from './Components/Pages/Details/Details';
import './App.css';

function App() {
  const emptyData = {
    name: '',
    gender: '',
    birth_year: '',
    height: '',
    mass: '',
    homeworld: '',
    skin_color: '',
    films: [],
    starships: []
  }
  const [data, setData] = useState([]);
  const [isReadyData, setIsReadyData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [detailedInfo, setDetailedInfo] = useState(emptyData);
  const debouncedSearch = useDebounce(inputValue, 500);

  useEffect(() => {
    getData('people', setData, setIsReadyData);
  }, [])

  useEffect(() => {
    const indexOfLastCard = currentPage * CARDS_PER_PAGE;
    const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;

    setCurrentCards(data.slice(indexOfFirstCard, indexOfLastCard));
  }, [isReadyData, currentPage])

  const filteredData = useMemo(() => {
    return filterInputData(currentCards, inputValue)
  }, [debouncedSearch, currentCards])

  return (
    <div className="App StarWars ">
      <Container className='StarWars__container d-md-flex flex-column mb-3'>
        <div className='StarWars__title'>Star Wars</div>
        <Navigation/>
        <Routes>
          <Route path='/' element={ 
            <Main 
              isReadyData={isReadyData}
              filteredData={filteredData}
              dataLength={data.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setInputValue={setInputValue}
              setDetailedInfo={setDetailedInfo}
            />}>
          </Route>
          <Route path='/details' element={
            <Details data={detailedInfo}/>
          }>
          </Route>
        </Routes>
      </Container>
    </div>
  );
}
 
export default App;
