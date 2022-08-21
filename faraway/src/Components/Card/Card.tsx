import { Data } from '../../Constants/Interfaces';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import { ListGroup } from 'react-bootstrap';

const CardInfo = (props:{ data: Data | any }) => {//todo спросить почему тут так
  const {
    name,
    gender,
    mass,
    height
  } = props.data;

  return (
    <Card className='mb-2 CardInfo' style={{color: '#000'}}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{gender}</Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item><span className='Label'>Height: </span>{height}</ListGroup.Item>
          <ListGroup.Item><span className='Label'>Mass: </span>{mass}</ListGroup.Item>
        </ListGroup>
        <Button variant='primary'>More information</Button>
      </Card.Body>
    </Card>
  )
};

export default CardInfo;