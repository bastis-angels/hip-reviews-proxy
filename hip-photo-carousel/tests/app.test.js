//import react, enzyme tools, and component you're testing
import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import App from "../src/client/app";
import Overlay from "../src/client/overlay-module/overlay"
import LeftArrow from "../src/client/overlay-module/leftArrow";
import Card from "../src/client/overlay-module/card";
import RightArrow from "../src/client/overlay-module/rightArrow";
import CarouselHeader from "../src/client/header-carousel/header-carousel";
import HeaderImage from "../src/client/header-carousel/header-image";

describe('App', () => {

  /////// Test Displays ///////

  //header-Image should display an image based on props.image
  it('displays header image based on props.image', () => {
    const headerImage = shallow(
      <HeaderImage 
        key={1}
        index={1}
        image='https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png'
        location={'location'}
      />
    );

    expect(headerImage.find('img').prop('src')).toBe('https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png');

    headerImage.setProps({image: 'https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-2.png'});
    expect(headerImage.find('img').prop('src')).toBe('https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-2.png');
  });

  //Card should display image based on props.image
  it('displays image based on props.image', () => {
    const card = shallow(
      <Card 
        key={1}
        image='https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png'
        location={'location'} 
        index={1}
        date={'Sat Feb 16 2019 '}
        upVotes={10}
        incrementUpVotes={() => {}}
        decrementUpVotes={() => {}}
        toggleOverlay={() => {}}
      />
    );

    expect(card.find('img').prop('src')).toBe('https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png');

    card.setProps({image: 'https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-2.png'});
    expect(card.find('img').prop('src')).toBe('https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-2.png');
  });

  //card should display date baswed on props.date
  it('displays date posted based on props.date', () => {
    const card = shallow(
      <Card 
        key={1}
        image='https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png'
        location={'location'} 
        index={1}
        date='Sat Feb 16 2019 05:29:18 GMT-0800 (PST)'
        upVotes={10}
        incrementUpVotes={() => {}}
        decrementUpVotes={() => {}}
        toggleOverlay={() => {}}
      />
    );

    expect(card.find('#date')).toBe('Sat Feb 16 2019 05:29:18 GMT-0800 (PST)');
  });

  //card should display location based on props.location
  it('displays location based on props.location', () => {
    const card = shallow(
      <Card 
        key={1}
        image='https://s3-us-west-1.amazonaws.com/bastis-camp-photos/wild-teepee-camp-1.png'
        location='Fully-configurable Colombian Peso Unidad de Valor Real Rhode Island Multi-layered'
        index={1}
        date='Sat Feb 16 2019 05:29:18 GMT-0800 (PST)'
        upVotes={10}
        incrementUpVotes={() => {}}
        decrementUpVotes={() => {}}
        toggleOverlay={() => {}}
      />
    );

    expect(card.find('#locale')).toBe('Fully-configurable Colombian Peso Unidad de Valor Real Rhode Island Multi-layered');
  });


    //Overlay should display overlay portal?

  
  ////// Test Function Calls /////////
    //  toggleOverlay
        //leftArrow-header should call function toggleOverlay onClick
        //rightArrow-header should call function toggleOverlay onClick
        //.close button should call function toggleOverlay onClick
        // header-carousel should call function toggleOverlay onClick
    
    //  Event Listener
        //on mount, an eventListener is invoked
        //on unmount, an eventListener is removed
     
  //rightArrow should call function nextImage onClick
    
  it('calls props.nextImage on right arrow click', () => {
    const nextImageSpy = jest.fn();

    const rightArrow = shallow(
      <RightArrow 
        nextImage={nextImageSpy}
      />
    );

    rightArrow.find('.nextArrow').simulate('click');

    expect(nextImageSpy).toHaveBeenCalled();
  });

  //leftArrow should call function prevImage onClick
  it('calls props.prevImage on left arrow click', () => {
    const prevImageSpy = jest.fn();

    const leftArrow = shallow(
      <LeftArrow 
        prevImage={prevImageSpy}
      />
    );

    leftArrow.find('.backArrow').simulate('click');

    expect(prevImageSpy).toHaveBeenCalled();
  });
    
    //   keydownHandler
        //keydown should invoke keydownHandler
    
    //   UpVote functions
        //helpfulButton should invoke incrementUpVotes while state is set to false
        //helpfulButton should invoke decrementUpVotes while state is set to true  

    //   handleClick function in helpful Button
        //helpfulButton should invoke handleClick function on click




  
  ////// Test State Changes /////////
    //   toggleOverlay
        //toggleOverlay state shoudl change when toggleOverlay is called
            //on leftArrow-header click
            //on rightArrow-header click
            //on header carousel click
            //on .close button click
    //    image


  //image state should change when nextImage is called on rightArrow click
  // it('updates the state on right arrow click', () => {
  //   const overlay = mount(<Overlay />);

  //   overlay.find('#rightArrow').simulate('click');

  //   expect(overlay.state('image')).toBe(data.images[1]);
  // });

  // //image state should change when prevImage is called on leftArrow click
  // it('updates the state on left arrow click', () => {
  //   const overlay = mount(<Overlay />);
    
  //   overlay.find('#leftArrow').simulate('click');

  //   expect(overlay.state('image')).toBe(data.images[0]);

  // });
        //image state should change when keypress Hander is called
            //on keydown
        //image state should change when increment or decrement upVotes is called
            //on helpful button click
    //    helpfulButton 
        //clicked state should change when handleClick is called on helpful button click


  });






  //other things you could test, but might not need to
  //  2. the userName reflects the prop passed down
  //  5. the description is displayed if there is one (haven't included this in data or component yet)



