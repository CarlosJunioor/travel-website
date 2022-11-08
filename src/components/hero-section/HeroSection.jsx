import React from 'react';
import { Button } from '../button/Button';
import video2 from '../../assets/video-2.mp4';

import './HeroSection.styles.css'
import '../../App.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src={video2} autoPlay loop muted />
        <h1>Modelos Atómicos</h1>
        <p>Como é constituída a Estrutura da Matéria?</p>
        <div className='hero-btns'>
            <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                onClick="#down"
                
            >
                <a href="#down" class="button-color">APRENDA</a>
            </Button>
            <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
            >
                ASSISTA AO TRAILER <i className='far fa-play-circle' /> 
            </Button>
            
        </div>
    </div>
  )
}

export default HeroSection;