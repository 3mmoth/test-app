import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

export class AndelRiksChart extends Component{
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
            labels: ['Kommunen', 'Riket'],
            datasets: [
        {
        label: "skattekraft",
        backgroundColor: [
        '#B21F00', '#282c34'
        ],
        data: this.props.andelriks
        }
        ]
        }
     });
    }

    render(){
        console.log(this.props.andelriks)
        return(
            <Bar 
                data = {this.state.chartData}
                options = {
                    {scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontFamily: 'Lora'
                            }
                        }]
                    },
                    title:{
                        display: true,
                        text: 'Andel av riksmedelvärdet',
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

export default AndelRiksChart;