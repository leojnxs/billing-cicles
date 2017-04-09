import React from 'react';

import '../../config/dependencies';

import Header from '../../components/header/header';
import SideBar from '../../components/sideBar/sideBar';
import Footer from '../../components/footer/footer';
import Routes from '../../config/routes';

export default props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
  </div>
);
