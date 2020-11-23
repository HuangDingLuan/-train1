import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import 'lazysizes'
import 'bootstrap/dist/css/bootstrap.min.css'
import Popular from '../src/components/Popular'
var ListGroup = ReactBootstrap.ListGroup
var Spinner = ReactBootstrap.Spinner
var Alert = ReactBootstrap.Alert
var Container = ReactBootstrap.Container
var Nav = ReactBootstrap.Nav
var Card = ReactBootstrap.Card
var Row = ReactBootstrap.Row
var Col = ReactBootstrap.Col
var Button = ReactBootstrap.Button


const App = (props) => (
<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

 {/*<div className="container">
        <h2>热门项目列表：</h2>
        <PopularRepoList />
        
</div>1111*/}
<Popular></Popular>
</div>
)

ReactDOM.render(
    <App>
    </App>,
    document.getElementById('container')
);