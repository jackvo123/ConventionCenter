import React from 'react';

import Menu from './Menu';

import Social from './Social';

import Search from './Search';

import HeaderCarousel from './HeaderCarousel';

import './mystyle.css'

class Header extends React.Component {
    render(){
        return (
            <div className="app-header">
                <div className="app-header-top">
                    <Social />
                    <img src="images/gem_logo.png"></img>
                    <Search />
                    <Menu />
                </div>
                <HeaderCarousel />
            </div>
        )
    }
}

export default Header;