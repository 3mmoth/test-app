import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

export class SkatteunderlagChart extends Component{
    constructor(){
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount(){
        this.getState();
    }
    
    getState(){
        this.setState({chartData:{
            labels: ['Totalt i kommunen'],
            fontSize: 8,
            datasets: [
        {
        label: "Skatteunderlag",
        backgroundColor: [
        '#B21F00',
        ],
        data: this.props.skatteunderlag
        }
        ]
        }
     });
    }

    render(){
        console.log(this.props.skatteunderlag)
        return(
            <Bar 
                data = {this.state.chartData}
                options = {{
                    scales: {
                        yAxes: [{
                            ticks: {
                                maxTicksLimit: 4,
                                beginAtZero: true,
                                suggestedMax: 3000000000
                            }
                        }]
                    },
                title:{
                    display: true,
                    text: 'Skatteunderlaget',
                    fontSize: 20
                },
                legend:{
                    display: false,
                    position: 'right'
                }
                }}
            />           
        )
    }
}

export default SkatteunderlagChart;