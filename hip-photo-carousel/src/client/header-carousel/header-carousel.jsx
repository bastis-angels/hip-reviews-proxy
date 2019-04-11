import React from 'react';
import HeaderImage from './header-image.jsx';
import RightArrowHeader from './rightArrow-header.jsx';
import LeftArrowHeader from './leftArrow-header.jsx';

const  Carousel = styled.div `
  display: flex;
  overflow-x: hidden;
`
const CarouselHeader = (props) => {
  const images = props.images.map(image => {
    return <HeaderImage 
      key={image.id}
      index={image.index}
      image={image.imageURL}
      location={image.location}
    />
  });

  return (
    <Carousel onClick={() => {props.toggleOverlay()}}>
        {images}
        <RightArrowHeader toggleOverlay={props.toggleOverlay}/>
        <LeftArrowHeader toggleOverlay={props.toggleOverlay}/>
    </Carousel>
  )
};

export default CarouselHeader;