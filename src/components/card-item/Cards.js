import React from 'react';
import './Cards.styles.css';
import CardItem from './CardItem';
import img9 from '../../assets/images/dalton.jpg';
import img2 from '../../assets/images/bohr.jpg';
import img3 from '../../assets/images/heinsenberg.jpg';
import img4 from '../../assets/images/roten.jpg';
import img8 from '../../assets/images/thomson.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Cientistas</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='John Dalton'
              label='Químico'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Niels Bohr'
              label='Físico'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Werner Heisenberg'
              label='Físico'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Wilhelm Conrad Röntgen'
              label='Físico'
              path='/products'
            />
            <CardItem
              src={img8}
              text='Joseph John Thomson'
              label='Físico'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
