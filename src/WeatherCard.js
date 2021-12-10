import React from "react";
import { Spinner, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { useState } from "react";
import {WiRain, WiDaySunny, WiThunderstorm, WiDayCloudy } from "react-icons/wi";

const WeatherCard = (props) => {

    const CELSIUS = '°C'
    const FAHRN = '°F'
    const [temperature, tempChange] = useState({unit : CELSIUS, day: props.day, dayType:props.dayType, max : props.max, min: props.min})
    
    const tempChangeHandler = (eventObj) => {
        eventObj.preventDefault()

        if (temperature.unit === CELSIUS) {
            let max = convertToFah(props.max)
            let min = convertToFah(props.min)
            tempChange({unit: FAHRN, day: props.day, dayType:props.dayType, max : max, min : min})
        }
        else {
            tempChange({unit: CELSIUS, day: props.day, dayType:props.dayType, max : props.max, min : props.min})
        }
    }

    const convertToFah = (val) => {
        return val * 1.8000 + 32.000
    }

    const getIcon = (dayType) =>{

        switch(dayType){
            case 'Clouds':
                return <WiDayCloudy/>
                break;
            case 'Rain':
            case 'Drizzle':
                return <WiRain/>
                break;
            case 'Thunderstorm':
                return <WiThunderstorm/>
                break;
            default:
                return <WiDaySunny/>

        }

    }
    if (props.day == undefined) {
        return (
            <Card style={{ background: 'Seashell', width: '32%' }}>
                <CardBody>
                    <Spinner
                        color="info"
                        type="grow"
                    >
                    </Spinner>
                </CardBody>
            </Card>
        )
    }

    else {
        //tempChange({unit: CELSIUS, max : props.max, min : props.min})
        let img = getIcon(temperature.dayType)

        return (
            <Card style={{ background: 'Seashell', width: '32%' }}>
                <CardBody>
                    <CardTitle tag="h5">
                        {temperature.day}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {img}   {temperature.dayType}
                    </CardSubtitle>
                    <CardText>
                        <b>High</b>: {temperature.max.toFixed(0)} {temperature.unit} 
                        <b> Low</b>: {temperature.min.toFixed(0)}{temperature.unit} 
                    </CardText>
                    <Button onClick={tempChangeHandler}>
                        Change units
                    </Button>
                </CardBody>
            </Card>
        )
    }
}

export default WeatherCard;