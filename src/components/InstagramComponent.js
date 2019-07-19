import React from 'react';

import './css/InstagramComponent.css';

class InstagramComponent extends React.Component {
    render() {
        return (
            <div className="app-instagram-component">
                <div className="app-container">
                    <div className="row app-instagram-row">
                        <div className="col-md-4 app-instagram-col">
                            <div>
                                <div>
                                    <h3>Follow our stories</h3>
                                    <h5>@gemcenter</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-2 app-instagram-col app-instagram-img">
                                    <img src="images/instagram1.jpg" />
                                </div>
                                <div className="col-md-2 app-instagram-col app-instagram-img">
                                    <img src="images/instagram2.jpg" />
                                </div>
                                <div className="col-md-2 app-instagram-col app-instagram-img">
                                    <img src="images/instagram3.jpg" />
                                </div>
                                <div className="col-md-2 app-instagram-col app-instagram-img">
                                    <img src="images/instagram4.jpg" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default InstagramComponent;