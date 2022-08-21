import React from 'react';
import { Data } from '../Constants/Interfaces'
import './Card.css';

const Card = (props:{ data: Data | any }) => {//todo спросить почему тут так
  const {
    name
  } = props.data;
  console.log(props);
  
  return (
    <div>
      {name}
    </div>
  )
};

export default Card;