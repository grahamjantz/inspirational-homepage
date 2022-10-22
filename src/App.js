import React, { useEffect } from 'react';
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
  
`;

export const imageArray = [
  {
    image: '',
    path: ''
  },
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
  
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(fetchImages())
  }, [dispatch])

  return (
    <StyledApp 
      className='background-image'
      style={{backgroundImage: `url(${fetchedImageArray[currentIndex].image === imageArray[currentIndex].image ? imageArray[currentIndex].image : fetchedImageArray[currentIndex].src.landscape})`}}
    >
      <div className='App'>
        <div className='scroll-buttons'>
          <BiLeftArrow className='arrow'onClick={() => dispatch(scrollDownImage(fetchedImageArray))}/>
          <BiRightArrow className='arrow'onClick={() => dispatch(scrollUpImage(fetchedImageArray))}/>
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
