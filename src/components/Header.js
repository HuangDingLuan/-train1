import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import 'lazysizes'
import 'bootstrap/dist/css/bootstrap.min.css'
var ListGroup = ReactBootstrap.ListGroup
var Spinner = ReactBootstrap.Spinner
var Alert = ReactBootstrap.Alert
var Container = ReactBootstrap.Container
var Nav = ReactBootstrap.Nav
var Card = ReactBootstrap.Card
var Row = ReactBootstrap.Row
var Col = ReactBootstrap.Col
var Button = ReactBootstrap.Button
const Header = (props) => {
    const menuItems = [
        'All',
        'Javascript',
        'Ruby',
        'Java',
        'Css',
        'Python'
    ]

    return (<div>
        <Container>
            <Nav className="justify-content-center" variant="pills" activeKey={props.activeKey || 'All' } onSelect={(selectedKey) => props.onClick(selectedKey)} >
                {menuItems.map((item, key) => <Nav.Item key={key}><Nav.Link eventKey={item} >{item}</Nav.Link></Nav.Item>)}
            </Nav>
        </Container>
    </div>)
}

export default Header