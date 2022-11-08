import React from 'react';
import '../../App.css';
import Cards from '../card-item/Cards';
import Pages from '../card-item/pages';
import Footer from '../footer/Footer';
import HeroSection from '../hero-section/HeroSection';

import tela1 from '../../assets/images/tela1.png';
import tela2 from '../../assets/images/tela2.png';
import tela3 from '../../assets/images/tela3.png';
import tela5 from '../../assets/images/tela5.png';
import tela6 from '../../assets/images/tela6.png';
import tela7 from '../../assets/images/tela7.png';
import tela8 from '../../assets/images/tela8.png';
import tela9 from '../../assets/images/tela9.png';
import tela10 from '../../assets/images/tela10.png';
import tela11 from '../../assets/images/tela11.png';



function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
             <div id='down'></div>
            <Pages />
            <img src={tela1} alt="gdfg" class="center"/>
            <img src={tela2} alt="gdfg" class="center"/>
            <img src={tela3} alt="gdfg" class="center"/>
            <img src={tela5} alt="gdfg" class="center"/>
            <img src={tela6} alt="gdfg" class="center"/>
            <img src={tela7} alt="gdfg" class="center"/>
            <img src={tela8} alt="gdfg" class="center"/>
            <img src={tela9} alt="gdfg" class="center"/>
            <img src={tela10} alt="gdfg" class="center"/>
            <img src={tela11} alt="gdfg" class="center"/>

            <Footer />
        </>
    )
}

export default Home;