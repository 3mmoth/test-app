import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import kommundata from './kommun.json';
import PieChart from './PieChart.js';



export class Skattesats extends Component{
    
  state = {
        isLoading: true,
        skattesats: [],
        error: null,
        kommun: "",
        chartData: {}
    }
    
    fetchSkattesats(id){
        const url = `https://api.scb.se/OV0104/v1/doris/sv/ssd/START/OE/OE0101/Kommunalskatter2000`
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
            skattesats: d,
            kommun: kommun["namn"]
        })
        console.log(d)
        })
        .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchSkattesats(this.props.match.params.id)
    }
    
    getSkatter(){

    }
    

    render(){
        const {isLoading, skattesats, error, kommun} = this.state;
        return(
        <React.Fragment>
        {error ? <p>{error.message}</p> : null}
           {!isLoading ? (
            <div className ="container">
                <h1 className= "Mellanrubrik">Skattesats i {kommun} kommun</h1>
                    <hr />
                        <PieChart skatt = {[parseInt(skattesats.data[0].values[1]), parseInt(skattesats.data[0].values[2]), 100-parseInt(skattesats.data[0].values[0])]}/>   
                           
                        <div className = "Kommuntext">
                          <p>Totala skattesatsen: <strong>{skattesats.data[0].values[0]} %</strong></p>  
                          <p>Kommunalskatt(primärkommun): <strong>{skattesats.data[0].values[1]} %</strong></p> 
                          <p>Landstingsskatt: <strong>{skattesats.data[0].values[2]} %</strong></p>   
                        </div>
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
export default withRouter(Skattesats);