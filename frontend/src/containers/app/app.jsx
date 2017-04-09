import React from 'react';

import '../../config/dependencies';

import Header from '../../components/header/header';
import SideBar from '../../components/sideBar/sideBar';
import Footer from '../../components/footer/footer';

export default props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">
      <h1>Content</h1>
    </div>
    <Footer />
  </div>
);
