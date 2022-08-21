import { useEffect, useState, useMemo } from 'react';
import getData from './DataController/DataController';
import CardInfo from './Components/Card/Card';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CARDS_PER_PAGE } from './Constants/Constants';
import Pagination from './Components/Pagination/Paginations';
import { filterInputData, useDebounce } from './Utils/Utils';
import { PulseLoader } from 'react-spinners';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isReadyData, setIsReadyData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    getData('people', setData, setIsReadyData);
  }, [])

  useEffect(() => {
    const indexOfLastPost = currentPage * CARDS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - CARDS_PER_PAGE;
    setCurrentCards(data.slice(indexOfFirstPost, indexOfLastPost));
  }, [isReadyData, currentPage])

  const filteredData = useMemo(() => {
    return filterInputData(currentCards, inputValue)
  }, [debouncedSearchTerm, currentCards])

  return (
    <div className="App StarWars ">
        <Container className='StarWars__container d-md-flex flex-column mb-3'>
          <div className='StarWars__title'>Star Wars</div>
          <>
            <Form.Control
              type='text'
              id='inputText'
              placeholder='Search by name'
              onChange={(event) => setInputValue(event.target.value)
              }
            />
          </>
          {isReadyData && 
          <>
            <div className='StarWars__content'>
              {filteredData.map((d, idx) => {
                return <CardInfo key={idx} data={d}></CardInfo>
              })}
            </div>
            <Pagination className='StarWars__pagination' totalCards={data.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </>
          }
          <PulseLoader className='StarWars__spinner' loading={!isReadyData} color={'#45b6fe'}/>
        </Container>
    </div>
  );
}
 
export default App;
