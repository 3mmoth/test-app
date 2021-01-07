import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import data from './kommun.json';
import logo from '../logos/ostergotland.svg';

export class List extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} sm={6} md={7} lg={7}>
                    <div className = "Kommuntext">
                        <h1 className="Mellanrubrik">Håll koll på skatten</h1>
                        <p>____</p>
                        <p>Hur mycket kommunalskatt betalar de i Valdemarsvik egentligen? Hur mycket lyckas skattekollektivet i Motala samla ihop på ett år? Alla frågor du inte visste att du hade kan du nu ta reda på genom denna applikation som bygger på data ifrån SCB. Klicka på respektive länk för din egen kommun!</p>
                        <p>____</p>
                        <p>Informationen på denna sida bygger på data från 2021. Vi jobbar ständigt med att hålla den statistiken så uppdaterad som möjligt.</p>
                        <p>____</p>
                    </div>
                    <img src={logo} alt="östergötland"/>

                </Col>
                <Col xs={12} sm={6} md={5} lg={5}>
                    <h1 className="Mellanrubrik">Välj en kommun</h1>
                    <hr />
                    {data.map((item, key) =>
                        <div key={key}>
                        <h2 className= "Kommunrubrik">{item.namn}</h2>
                            <p className = "Kommunlänk"><Link to={`/skattesats/${item.kod}`}>skattesats</Link> <Link to={`/skattekraft/${item.kod}`}>skattekraft</Link></p>
                        <hr />
                        </div>
                    )}
                </Col>
            </Row>
        )
    }
}
export default withRouter(List);