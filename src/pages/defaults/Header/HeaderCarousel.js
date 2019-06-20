import React from 'react';

import { Carousel } from 'react-bootstrap';

class HeaderCarousel extends React.Component {
    buildContent() {

        let data = [{
            cls: 'app-header-carousel-01',
            img: 'images/CastorHome.jpg'
        }, {
            cls: 'app-header-carousel-02',
            img: 'images/PolluxHome2.jpg'
        }, {
            cls: 'app-header-carousel-03',
            img: 'images/Saltus.jpg'
        }];

        let result = [];

        for (let i = 0; i < data.length; i++) {
            let defaultStyle = {
                width: '100%',
                background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 33.73%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
                height: '600px',
                backgroundSize: 'cover',
                backgroundRepeat: 'round',
            }
            defaultStyle['background'] = `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 33.73%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${data[i].img})`
            result.push(
                <Carousel.Item key={i}>
                    <div style={defaultStyle} className={data[i].cls}></div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        }

        return result;

    }
    render() {
        return (
            <div className="app-header-carousel">
                <Carousel>
                    {this.buildContent()}
                </Carousel>
            </div>
        )
    }
}

export default HeaderCarousel;