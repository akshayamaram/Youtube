import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import {Provider} from 'react-redux'
import store from './components/utils/store'


const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App