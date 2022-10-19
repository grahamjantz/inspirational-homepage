import React from 'react';
import './App.css';
import Header from './features/Header/Header'
import NewGoal from './features/NewGoal/NewGoal'
import Goals from './features/Goals/Goals'
import Footer from './components/Footer/Footer'
import rainForest from './images/rainforest.jpg'
import styled from 'styled-components';

const StyledApp = styled.div`
  background-image: url(${rainForest});
  background-color: black;
  background-repeat: no-repeat;
  border-radius: 0;
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
