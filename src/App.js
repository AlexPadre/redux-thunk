import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { incrementCountAction } from './actions';

function App({ incrementMyCount, myCount }) {
  return ( 
    <div className="App">
      <button onClick={incrementMyCount}>
        {myCount}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
    myCount: state.count
})

const mapDispatchToProps = {
  incrementMyCount: incrementCountAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
