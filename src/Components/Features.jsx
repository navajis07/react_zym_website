import React from 'react';
import Featuresbox from './Featuresbox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Features() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className="a-container"></div>
        <Featuresbox image={fimage1} title='weight Lifting'/>
        <Featuresbox image={fimage2} title='Specific Muscle'/>
        <Featuresbox image={fimage3} title='Flex Your Muscle'/>
        <Featuresbox image={fimage4} title='Cardio Excercise'/>
    </div>
  )
}

export default Features