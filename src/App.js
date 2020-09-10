import React from 'react';
import { connect } from 'react-redux';
import Drawer from './components/LayoutNav';
import './App.css';


function App({store}) {
  return (
    <div className="App">
      <Drawer greeting={store.state.greeting}/>
    </div>
  );
}

// to GET from the store
const getProps = state => {
  return {
    store : state
  }
}

export default connect(getProps, null)(App);