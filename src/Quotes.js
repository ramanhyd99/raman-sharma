import React from "react";
import { HiRefresh } from "react-icons/hi";
import { Alert, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import WeatherCard from "./WeatherCard";
import axios from "axios";

class Quotes extends React.Component {

    constructor() {
        super()
        axios.get('https://type.fit/api/quotes').then((resp) => {
            let quotes = resp.data
            this.state.data = resp.data
            console.log('got data')
        }).catch(err => { console.log('error getting quotes' + err) })
    }

    state = ({ data: undefined, 'placeholder': 'Something good is coming...' })

    getQuote = () => {
        let randomVal = Math.floor(Math.random() * this.state.data.length)
        let text = this.state.data[randomVal].text
        let author = this.state.data[randomVal].author == 'null' ? 'anonymous' : this.state.data[randomVal].author
        console.log('Elemhant ' + text)
        return this.quote = '"' + text + '"  - ' + author
    }


    quoteOnClickHandler = () => {
        this.props.rerenderParentCallback();
    }
    render() {

        if (this.state.data == undefined) {
            return (<Alert
                color="primary"
            >
                {this.state.placeholder}
            </Alert>)
        } else {

            let quote = this.getQuote()
            return <Alert
                color="primary"
            >
                {quote} <b><HiRefresh onClick={this.quoteOnClickHandler} /></b>
            </Alert>
        }


    }
}

export default Quotes;