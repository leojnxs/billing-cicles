import React from 'react';
import '../../config/dependencies'
import Header from '../../components/header/header';
import SideBar from '../../components/sideBar/sideBar';

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
    </div>
);