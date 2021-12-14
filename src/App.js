import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/containers/HeaderContainer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { getAuthUser, initializeApp } from './thunks/thunks';


function App(props) {

  return (
    <div className="wrapper">

      <HeaderContainer />
      <Main />

    </div>
  );
}


export default App;
