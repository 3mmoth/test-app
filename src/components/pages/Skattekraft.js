import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import kommundata from '../data/kommun.json';
import AndelRiksChart from '../charts/AndelRiksChart.js';
import SkatteunderlagChart from '../charts/SkatteunderlagChart.js';
import SkattekraftChart from '../charts/SkattekraftChart.js'
import {Row, Col} from 'reactstrap';

export class Skattekraft extends Component{
    state = {
        isLoading: true,
        skatteuppgifter: [],
        error: null,
        kommun: ""
    }

    fetchSkatteuppgifter(id){
      const url = `http://api.scb.se/OV0104/v1/doris/sv/ssd/START/OE/OE0101/SkatteKraft`
      let kommun = kommundata.find(el => el.kod === `${id}`);
      let data = {
        "query": [
          {
            "code": "Region",
            "selection": {
              "filter": "vs:RegionKommun07EjAggr",
              "values": [
                `${id}`
              ]
            }
          },
          {
            "code": "Tid",
            "selection": {
              "filter": "item",
              "values": [
                "2021"
              ]
            }
          }
        ],
        "response": {
          "format": "json"
        }
      }
      fetch(url, {
        method:'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(d =>{
          this.setState({
            isLoading: false.catch,
          skatteuppgifter: d,
          kommun: kommun["namn"]
      })
      })
    .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchSkatteuppgifter(this.props.match.params.id)
    }

    render(){
        const {isLoading, skatteuppgifter, error, kommun} = this.state;
        return(
        <React.Fragment>
        {error ? <p>{error.message}</p> : null}
           {!isLoading ? (
            <div className = "container">
                <h1 className= "Mellanrubrik">Skattekraft i {kommun} kommun</h1>
                    <hr />
                    <Row>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <SkatteunderlagChart skatteunderlag = {[parseInt(skatteuppgifter.data[0].values[0])]} /> 
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <SkattekraftChart skattekraft = {[parseInt(skatteuppgifter.data[0].values[1]), 225194]}/>   
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <AndelRiksChart andelriks = {[parseInt(skatteuppgifter.data[0].values[2]), 100]}/>   
                    </Col>
                    </Row>  
                    <hr />   
                      <p>Totala skatteunderlaget: <strong>{skatteuppgifter.data[0].values[0]} kr</strong></p>
                      <p>Skattekraft: <strong>{skatteuppgifter.data[0].values[1]} kr/invånare</strong></p>
                      <p>Andel av riksmedelvärdet: <strong>{skatteuppgifter.data[0].values[2]} %</strong></p>
                    <hr />

                <Link to='/'>Tillbaka</Link>
            </div>
            ) : (
            <h3>Laddar...</h3>
            )}
        </React.Fragment>
        )
    }
}
export default withRouter(Skattekraft);
