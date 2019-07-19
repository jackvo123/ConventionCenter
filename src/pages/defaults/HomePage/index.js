import React from 'react';

import Content from '../../../components/Content';

import ContentComponent from '../ContentComponent'

import ExploreComponent from '../../../components/ExploreComponent';

import ServiceComponent from '../../../components/ServiceComponent';

import VideoComponent from './VideoComponent';

import NewsComponent from '../../../components/NewsComponent';

import InstagramComponent from '../../../components/InstagramComponent';

import './homepagestyle.css'

class HomePage extends React.Component {
    buildContent() {
        let data = [];

        data.push(<ContentComponent key="01" />)
        data.push(<ExploreComponent key="02" />)
        data.push(<ServiceComponent key="03" />)
        data.push(<VideoComponent key="04" />)
        data.push(<NewsComponent key="05" />)
        data.push(<InstagramComponent key="06" />)
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