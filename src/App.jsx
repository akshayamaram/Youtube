import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import {Provider} from 'react-redux'
import store from './components/utils/store'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>,
    },
    {
      path: "/watch",
      element: <WatchPage/>
    }
  ]
}])

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <RouterProvider router={appRouter}/>
        {/* <Body /> */}
      </div>
    </Provider>
  );
}

export default App