import React, {Component} from 'react';

export class Footer extends Component{
    render(){
        return(
            <footer className = "App-footer">
                <p className="Footertext">Statistiken som presenteras på denna sida är hämtad från <a href= "https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/">SCB:s statistikdatabas.</a> </p>
            </footer>
        )
    }
}

export default Footer