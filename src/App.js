import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import CryptoTracker from './components/CryptoTracker.tsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <center> <h1>Stock Tracker</h1> </center>
        <CryptoTracker />
      </div>
    </Provider>
  );
}

export default App;