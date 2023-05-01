import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import NewsArea from './components/NewsArea';
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  const [progress, setProgress]= useState(0)
  const apiKey=process.env.REACT_APP_NEWSAPI_KEY
  const pageSize=6;
    return (
      <>
     <Router>
      <NavBar/>
      <LoadingBar color='#f11946' progress={progress} />
      <Routes>
        <Route exact path='/'  element={<NewsArea pageSize={pageSize} apiKey={apiKey} setProgress={setProgress} key='general' country="in" category="general"/>}/>

        <Route exact path='/entertainment'  element={<NewsArea pageSize={pageSize} apiKey={apiKey} setProgress={setProgress} key='entertainment' country="in" category="entertainment"/>}/>

        <Route exact path='/business'  element={<NewsArea pageSize={pageSize} apiKey={apiKey} setProgress={setProgress} key='business' country="in" category="business"/>}/>

        <Route exact path='/health'  element={<NewsArea pageSize={pageSize} apiKey={apiKey} setProgress={setProgress} key='health' country="in" category="health"/>}/>

        <Route exact path='/sports' element={<NewsArea pageSize={pageSize} apiKey={apiKey} setProgress={setProgress} key='sports' country="in" category="sports"/>}/>

        <Route exact path='/technology' element={<NewsArea pageSize={pageSize} apiKey={apiKey} setProgress={setProgress} key='technology' country="in" category="technology"/>}/>
        
        <Route exact path='/science' element={<NewsArea pageSize={pageSize} apiKey={apiKey} setProgress={setProgress} key='science' country="in" category="science"/>}/>
      </Routes>
      
      <Footer/>
      </Router>
      </>
    

    )
  
}

export default App;
