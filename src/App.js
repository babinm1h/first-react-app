import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/containers/HeaderContainer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { getAuthUser, initializeApp } from './thunks/thunks';


function App(props) {
  React.useEffect(() => {
    props.initializeApp()
  }, [])

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className="wrapper">

      <HeaderContainer />
      <Main />

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { getAuthUser, initializeApp })(App);
