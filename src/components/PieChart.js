
import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';


 

export class PieChart extends Component{
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
            labels: ['Kommunalskatt', 'Landstingsskatt', 'Nettolön'],
            datasets: [
        {
        label: "skattesats",
        backgroundColor: [
        '#B21F00',
        '#FFCD50',
        '#B3D1A4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000'
        ],
        data: this.props.skatt
        }
        ]
        }
     });
    }

    render(){
        return(
            <Pie 
                data = {this.state.chartData}
                options = {{
                title:{
                    display: true,
                    text: '',
                    fontSize: 20
                },
                legend:{
                    display: true,
                    position: 'right'
                }
                }}
            />           
        )
    }
}

export default PieChart;