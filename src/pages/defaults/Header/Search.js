import React from 'react';

import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';

class Search extends React.Component {
    render() {
        return (
            <div className="app-header-search">
                <p>Enter your keyword ...</p>
                <i className="fa fa-search"></i>
            </div>
        )
    }
}

export default Search;