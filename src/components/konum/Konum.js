import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCountry } from '../../redux/weatherSlice'
import "./konum.css"
const Konum = () => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [selectlongitude, setSelectLongitude] = useState();
    const [selectlatitude, setSelectLatitude] = useState();


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

    const getWeatherDailyData = async (lat, lon) => {

        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=metric`)
            dispatch(getCountry(data))
            console.log(data)
        } catch {
            console.log("günlük veri alınamadı")
        }

    };

    const getCountryDailyData = async (countryName) => {

        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`)
            setSelectLongitude(data.coord.lon)
            setSelectLatitude(data.coord.lat)

        } catch {
            console.log("country  veri alınamadı")
        }

    };


    useEffect(() => {
        countryName === null && geoFindMe();
        latitude && longitude && getWeatherDailyData(latitude, longitude);
    }, [latitude, longitude, countryName]);

    useEffect(() => {
        countryName !== null && countryName !== "Europe/Istanbul" && getCountryDailyData(countryName);
        selectlongitude && selectlatitude && getWeatherDailyData(selectlatitude, selectlongitude);
    }, [countryName, selectlongitude, selectlatitude]);

    const handleDate = () => {
        const date = new Date()
        var text = date.toLocaleTimeString();
        return text
    }


    if (!items.current) {
        return <div></div>;
    }
    return (
        <div className="konumContainer">

            <div className="countryName">{countryName ? countryName : items.timezone}</div>
            <div> {handleDate()}</div>
            <div className="todayInfo">
                <div className="durumIcon">
                    <div><img className="img"
                        src={`https://openweathermap.org/img/wn/${items.current.weather.map(item => item.icon)}@2x.png`}
                        alt="weatherImg"
                    /></div>
                    <div className="durum">{items.current.weather.map(item => item.description).join(", ")}</div>
                </div>
                <div className="derece">{Math.floor(items.current.temp)}°</div>
                <div className="wind">Wind: {items.current.wind_speed} kmph</div>

            </div>
        </div>
    )
}

export default Konum
