import { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { DetailsPageInterface } from '../../../Constants/Interfaces';
import { getDataArr } from '../../../DataController/DataController';
import { BarLoader } from 'react-spinners';
import './Details.css'

const Details = (props: DetailsPageInterface) => {
  const {
    name,
    gender,
    height,
    mass,
    birth_year,
    homeworld: homeworldUrl,
    skin_color,
    films: filmsUrls,
    starships: starshipsUrls,
  } = props.data;

  const [films, getFilms] = useState([{title: ''}]);
  const [isReadyDataFilms, setIsReadyDataFilms] = useState(false);
  const [home, getHome] = useState([{name: ''}]);
  const [isReadyDataHome, setIsReadyDataHome] = useState(false);
  const [starShips, getStarShips] = useState([{name: ''}]);
  const [isReadyDataStarShips, setIsReadyDataStarShips] = useState(false);
 
  useEffect(() => {
    getDataArr(filmsUrls, getFilms, setIsReadyDataFilms);
  }, [name]);

  useEffect(() => {
    getDataArr([homeworldUrl], getHome, setIsReadyDataHome);
  }, [name]);

  useEffect(() => {
    if(starshipsUrls.length > 0) {
      getDataArr(starshipsUrls, getStarShips, setIsReadyDataStarShips);
    } else {
      getStarShips([{name: 'no information'}]);
      setIsReadyDataStarShips(true);
    }
    
  }, [name]);

  return (
    <Card className='mb-2 CardInfo__Details' style={{color: '#000'}}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{gender}</Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item className='CardInfo__Details__listGroup'><span className='Label'>Home: </span>
            {isReadyDataHome && home[0].name || <BarLoader/>}
          </ListGroup.Item>
          <ListGroup.Item className='CardInfo__Details__listGroup'><span className='Label'>Birth: </span>{birth_year}</ListGroup.Item>
          <ListGroup.Item className='CardInfo__Details__listGroup'><span className='Label'>Height: </span>{height}</ListGroup.Item>
          <ListGroup.Item className='CardInfo__Details__listGroup'><span className='Label'>Mass: </span>{mass}</ListGroup.Item>
          <ListGroup.Item className='CardInfo__Details__listGroup'><span className='Label'>Skin: </span>{skin_color}</ListGroup.Item>
          <ListGroup.Item className='CardInfo__Details__listGroup'><span className='Label'>Films: </span>
            {isReadyDataFilms && films.map(f => f.title).join(', ') || <BarLoader/>}
          </ListGroup.Item>
          <ListGroup.Item className='CardInfo__Details__listGroup'><span className='Label'>StarShips: </span>
            {isReadyDataStarShips && starShips.map(s => s.name).join(', ') || <BarLoader/>}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default Details;
