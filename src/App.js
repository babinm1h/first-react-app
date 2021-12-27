import React from 'react';
import './App.scss';
import HeaderContainer from './components/containers/HeaderContainer';
import Main from './components/Main/Main';


function App() {

  return (
    <div className="wrapper">

      <HeaderContainer />
      <Main />

    </div>
  );
}


export default App;
