import React from 'react';
import Content from './../../components/Content';

import ContentComponent from './ContentComponent'

import ExploreComponent from '../../components/ExploreComponent';

import './homepagestyle.css'

import '../../components/css/ExploreComponent.css'

class HomePage extends React.Component {
    buildContent() {
        let data = [];

        data.push(<ContentComponent key="01" />)
        data.push(<ExploreComponent key="02" />)
        return data;
    }
    
    render() {
        return (
            <div className="app-home-page">
                <Content data={this.buildContent()} />
            </div>
        )
    }
}

export default HomePage;