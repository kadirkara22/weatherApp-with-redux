import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./days.css"
const Days = () => {
    const items = useSelector(state => state.weathers.items)


    function dtConverter(UNIX_TIMESTAMP) {
        var date = (new Date(UNIX_TIMESTAMP * 1000).toString().split(" ")[0]);

        return date

    }

    console.log(items.daily)
    if (!items.daily) {
        return <div></div>
    }
    return (
        <div className="daysContainer">
            {

                items.daily.map((item, i) => (
                    <div key={i} className="dayContent">
                        <div className="day">{dtConverter(item.dt)}</div>
                        <div className="image">
                            <img className="img"
                                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                alt="weatherImg"
                            /></div>
                        <div className="dereceler">
                            <div className="derece1">{Math.floor(item.temp.day)}</div>
                            <div className="derece2">{Math.floor(item.temp.night)}</div>
                        </div>
                    </div>
                ))


            }


        </div>
    )
}

export default Days
