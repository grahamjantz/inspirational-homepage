import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './features/Header/Header'
import NewGoal from './features/NewGoal/NewGoal'
import Goals from './features/Goals/Goals'
import Footer from './components/Footer/Footer'
import rainForest from './images/rainforest.jpg'
import lake from './images/lake.jpeg'
import mountain from './images/mountain.jpeg'
import waterfall from './images/waterfall.jpeg'
import styled from 'styled-components';
import { BiRightArrow, BiLeftArrow  } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { scrollUpImage, scrollDownImage, selectCurrentIndex, selectImageArray, fetchImages } from './images/imagesSlice';

const StyledApp = styled.div`
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0;
`;

export const imageArray = [
  {
    image: rainForest,
    path: './images/rainforest.jpg'
  },
  {
    image: lake,
    path: './images/lake.jpeg'
  },
  {
    image: mountain,
    path: './images/mountain.jpeg'
  },
   {
    image: waterfall,
    path: './images/waterfall.jpeg'
   }
]

function App() {


  const currentIndex = useSelector(selectCurrentIndex)
  const fetchedImageArray = useSelector(selectImageArray)

  console.log(fetchedImageArray)

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchImages())
  }, [])

  return (
    <StyledApp 
      className='background-image' 
      // style={{backgroundImage: `url(${fetchedImageArray[currentIndex].image})`}}
      // style={{backgroundImage: `url(${!fetchedImageArray ? imageArray[currentIndex].image : fetchedImageArray[currentIndex].src.landscape})`}}
    >
      <div className='App'>
        <div className='scroll-buttons'>
          <BiLeftArrow size={50} onClick={() => dispatch(scrollDownImage(imageArray))}/>
          <BiRightArrow size={50} onClick={() => dispatch(scrollUpImage(imageArray))}/>
        </div>
        <Header />
        <NewGoal />
        <Goals />
        <Footer />
      </div>
    </StyledApp>
  );
}

export default App;
