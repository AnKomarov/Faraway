import { useCallback } from 'react';
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import CardInfo from "../../Card/Card";
import Pagination from "../../Pagination/Paginations";
import { PulseLoader } from 'react-spinners';
import { Data, MainPage } from '../../../Constants/Interfaces';

import './Main.css';

const Main = (props: MainPage) => {
  const { 
    isReadyData, 
    filteredData, 
    dataLength, 
    currentPage, 
    setCurrentPage, 
    setInputValue,
    setDetailedInfo } = props;

  const navigate = useNavigate();
  const moreInfoClick = useCallback((person) => {
    navigate('/details', {replace: true});
    setDetailedInfo(person);
  }, [navigate]);

  return (
    <>
      <Form.Control
        type='text'
        id='inputText'
        placeholder='Search by name'
        onChange={(event) => setInputValue(event.target.value)}
      />
      {isReadyData && 
      <>
        <div className='StarWars__content'>
          {filteredData.map((d: Data, idx: number) => {
            return <CardInfo key={idx} data={d} moreInfoClick={moreInfoClick}></CardInfo>
          })}
        </div>
        <Pagination className='StarWars__pagination' totalCards={dataLength} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </>
      }
     <PulseLoader className='StarWars__spinner' loading={!isReadyData} color={'#45b6fe'}/>
    </>
  )
}

export default Main;