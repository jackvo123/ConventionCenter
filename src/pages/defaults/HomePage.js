import React from 'react';
import Content from './../../components/Content';

import ContentComponent from './ContentComponent'

class HomePage extends React.Component {
    buildContent() {
        let data = [];

        data.push(<ContentComponent key="01" />)
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