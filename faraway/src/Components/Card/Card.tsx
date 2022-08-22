import { DataInterface } from '../../Constants/Interfaces';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import { ListGroup } from 'react-bootstrap';

const CardInfo = (props:{ data: DataInterface, moreInfoClick: any }) => {
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
        <Button variant='primary' onClick={() => props.moreInfoClick(props.data)}>More information</Button>
      </Card.Body>
    </Card>
  )
};

export default CardInfo;
