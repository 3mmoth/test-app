import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

export class SkattekraftChart extends Component{
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
            labels: ['Genomsnitt kommunen', 'Genomsnitt riket'],
            datasets: [
        {
        label: "skattekraft",
        backgroundColor: [
        '#B21F00', '#282c34'
        ],
        data: this.props.skattekraft
        }
        ]
        }
     });
    }

    render(){
        console.log(this.props.skattekraft)
        return(
            <Bar 
                data = {this.state.chartData}
                options = {{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                title:{
                    display: true,
                    text: 'Skattekraften',
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

export default SkattekraftChart;