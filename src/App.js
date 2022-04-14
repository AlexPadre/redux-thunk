import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { incrementCountAction } from './actions';

function App({ incrementMyCount, myCount, loading, error }) {
  return ( 
    <div className="App">
      <button onClick={incrementMyCount}>
        {loading ? 'loading...' : myCount}
      </button>
    {error && <div>Error</div>}
    </div>
  );
}

const mapStateToProps = (state) => ({
    myCount: state.count,
    loading: state.loading,
    error: state.error
})

const mapDispatchToProps = {
  incrementMyCount: incrementCountAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
