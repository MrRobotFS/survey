import React,{Fragment} from 'react';
import Header from "./components/Header";
import Poll  from './components/Poll';
import Footer from "./components/Footer";

//Assets

import './App.css';

function App() {

  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header/>
      <Poll/>
      <Footer date={date}/>
    </Fragment>
  );
}

export default App;
