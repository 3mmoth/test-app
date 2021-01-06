import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import logo from '../logos/ostergotland_vapen.svg';

export class Header extends Component {
    render() {
        return(<header className="App-header">
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}><h1 className= "App-header-h1">Skattestatistik i Östergötland</h1></Col>
          <Col xs={12} sm={12} md={4} lg={4}>
          <Link to="/test-app/"><img src={logo} className="App-logo" alt="logo" /></Link>
          </Col>
        </Row>
      </header>)
    }
}

export default Header