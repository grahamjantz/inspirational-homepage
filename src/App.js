import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import NewGoal from './components/NewGoal/NewGoal'
import Goals from './components/Goals/Goals'
import Footer from './components/Footer/Footer'
import rainForest from './images/rainforest.jpg'
import styled from 'styled-components';

const StyledApp = styled.div`
  background-image: url(${rainForest});
  background-color: black;
`;

function App() {
  return (
    <StyledApp className='background-image'>
      <div className='App'>
        <Header />
        <NewGoal />
        <Goals />
        <Footer />
      </div>
    </StyledApp>
  );
}

export default App;
