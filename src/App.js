import React from 'react';
import './App.css';
import TopBar from './components/Header/TopBar';
import SecondBar from './components/Header/BottomBar';
import TopFooter from './components/Footer/top-footer/TopFooterComponent';
import SecondFooter from './components/Footer/second-footer/SecondFooterComponent';
import DropDownProvider  from './providers/DropDownProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-slider/assets/index.css';
// import TopNav from './components/Navbar/TopNav';


import FilterDrawer   from './components/Filters/FilterDrawer';

function App() {
  return (
    <div className="App">
      <DropDownProvider>
        <TopBar />
        <SecondBar/>
        <TopFooter />
        <SecondFooter />
      </DropDownProvider>
      <FilterDrawer/>
    </div>
  );
}

export default App;
