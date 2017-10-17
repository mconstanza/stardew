// ./client/components/App.jsx

import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ChecklistIndex from './components/ChecklistIndex.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ChecklistIndex/>
        <Footer/>
      </div>
    );
  }
}
