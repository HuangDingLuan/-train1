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

const RepoCard = (props) => (<Card border="success" style={{ marginTop: '8px', marginBottom: '8px' }}>
    <Card.Header className="text-center">{props.no}</Card.Header>
    <Card.Body>
        <Card.Img src="images/image.png" data-src={props.img} className="lazyload" />
        <Card.Title className="text-center"><Card.Link href={props.url} target="_blank">{props.title}</Card.Link></Card.Title>
        <Card.Text><i className="fa fa-user fa-lg fa-fw" style={{ color: 'orange' }}></i>{props.author}</Card.Text>
        <Card.Text><i className="fa fa-star fa-lg fa-fw" style={{ color: 'yellow' }}></i>{props.stars}</Card.Text>
        <Card.Text><i className="fa fa-code-fork fa-lg fa-fw" style={{ color: 'lightblue' }}></i>{props.forks}</Card.Text>
        <Card.Text><i className="fa fa-warning fa-lg fa-fw" style={{ color: 'purple' }}></i>{props.issues}</Card.Text>

    </Card.Body>
</Card>)

export default RepoCard