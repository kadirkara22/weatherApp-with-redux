import React from 'react'
import { useSelector } from 'react-redux'
import "./days.css"
const Days = () => {
    const countryName = useSelector(state => state.weathers.countryName)
    console.log(countryName)

    return (
        <div className="daysContainer">
            <div className="dayContent">
                <div className="day">Pazar</div>
                <div className="image">güneşli</div>
                <div className="dereceler">
                    <div className="derece1">28</div>
                    <div className="derece2">15</div>
                </div>

            </div>
            <div className="dayContent">
                <div className="day">Pazar</div>
                <div className="image">güneşli</div>
                <div className="dereceler">
                    <div className="derece1">28</div>
                    <div className="derece2">15</div>
                </div>
            </div>
            <div className="dayContent">
                <div className="day">Pazar</div>
                <div className="image">güneşli</div>
                <div className="dereceler">
                    <div className="derece1">28</div>
                    <div className="derece2">15</div>
                </div>
            </div>
            <div className="dayContent">
                <div className="day">Pazar</div>
                <div className="image">güneşli</div>
                <div className="dereceler">
                    <div className="derece1">28</div>
                    <div className="derece2">15</div>
                </div>
            </div>
            <div className="dayContent">
                <div className="day">Pazar</div>
                <div className="image">güneşli</div>
                <div className="dereceler">
                    <div className="derece1">28</div>
                    <div className="derece2">15</div>
                </div>
            </div>
            <div className="dayContent">
                <div className="day">Pazar</div>
                <div className="image">güneşli</div>
                <div className="dereceler">
                    <div className="derece1">28</div>
                    <div className="derece2">15</div>
                </div>
            </div>
            <div className="dayContent">
                <div className="day">Pazar</div>
                <div className="image">güneşli</div>
                <div className="dereceler">
                    <div className="derece1">28</div>
                    <div className="derece2">15</div>
                </div>
            </div>


        </div>
    )
}

export default Days
