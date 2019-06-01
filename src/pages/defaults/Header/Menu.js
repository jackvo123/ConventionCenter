import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <div className="app-header-menu">
                <Navbar bg="transparent" variant="dark" expand="lg" className="justify-content-center">
                    <Nav activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Giới thiệu</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Khám phá</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Dịch vụ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Tin tức</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Đặt chỗ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5">Liên hệ</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Menu;