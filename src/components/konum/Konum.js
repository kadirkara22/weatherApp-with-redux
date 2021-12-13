import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePosition } from 'use-position'
import { getCountry } from '../../redux/weatherSlice'
import "./konum.css"
const Konum = () => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();


    const items = useSelector(state => state.weathers.items)
    const countryName = useSelector(state => state.weathers.countryName)
    const dispatch = useDispatch()

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    function geoFindMe() {

        function success(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);
        }
    }

    /*     const getCountryData = async () => {
    
            try {
                const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`)
                dispatch(getCountry(data))
            } catch {
                console.log("city veri alınamadı")
            }
        }
     */
    const getWeatherDailyData = async (lat, lon) => {

        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=metric`)
            dispatch(getCountry(data))
        } catch {
            console.log("günlük veri alınamadı")
        }

    };

    useEffect(() => {
        geoFindMe();
        latitude && longitude && getWeatherDailyData(latitude, longitude);
    }, [latitude, longitude]);


    if (!items.current) {
        return <div></div>;
    }
    return (
        <div className="konumContainer">

            <div className="countryName">{items.timezone}</div>
            <div className="durum">{items.current.weather.map(item => item.description).join(", ")}</div>
            <div className="derece">{items.current.temp}°</div>
        </div>
    )
}

export default Konum
