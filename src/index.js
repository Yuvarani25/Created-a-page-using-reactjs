import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';


const website=(
 <div>
  <h1>FULLSTACK DEVELOPMENT</h1>
     <Header/>
     <Content/>
       <Footer/> 
      </div>
);
ReactDOM.render(website,document.getElementById('root'));
