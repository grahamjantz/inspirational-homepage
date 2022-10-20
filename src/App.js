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
import { createClient } from 'pexels';

const StyledApp = styled.div`
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0;
`;
export const imageArray = [rainForest, lake, mountain, waterfall]

function App() {


  // const [imageArray, setImageArray] = useState([rainForest, lake, mountain, waterfall])
  const [currentImage, setCurrentImage] = useState(imageArray[0])
  const [num, setNum] = useState(0)

  const key = '563492ad6f91700001000001f7e410324a8c4afd97a23ceb8906e67c'
  const url = ``;


  // useEffect(() => {
  //   const client = createClient(key);
  //   const query = 'Nature';
    
  //   client.photos.search({ query, per_page: 5 }).then(photos => setImageArray(photos.photos));

  // }, [])

  // useEffect(() => {
  //   // setCurrentImage(imageArray[0].src.landscape)
  //   setCurrentImage(imageArray[0])
  // }, [imageArray])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url)
  //     const data = res.json()
  //     console.log(data)
  //     setImage(data)
  //   }
  //   fetchData();
  // }, [])


  const scrollUp = () => {
    if (imageArray.indexOf(currentImage) === imageArray.length - 2) {
      setNum(0);
      setCurrentImage(imageArray[num])
    }else if (imageArray.indexOf(currentImage) < imageArray.length) {
      setNum(num + 1)
      setCurrentImage(imageArray[num])
    }  
  }

  const scrollDown = () => {
    console.log(num)
    console.log(imageArray.length)
    if (imageArray.indexOf(currentImage) === 0) {
      setNum(imageArray.length - 1);
      setCurrentImage(imageArray[num])
    }else {
      setNum(num - 1)
      setCurrentImage(imageArray[num])
    }  
  }

  return (
    <StyledApp className='background-image' style={{backgroundImage: `url(${currentImage})`}}>
      <div className='App'>
        <div className='scroll-buttons'>
          <BiLeftArrow size={50} onClick={() => scrollDown()}/>
          <BiRightArrow size={50} onClick={() => scrollUp()}/>
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
