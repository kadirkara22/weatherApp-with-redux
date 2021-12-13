import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCountry } from '../../redux/weatherSlice'
import "./countries.css"
const Countries = () => {
    const countryList = useSelector(state => state.weathers.countryList)

    const dispatch = useDispatch()

    const handleChange = (countryName) => {
        dispatch(selectCountry(countryName))
    }

    return (
        <div className="selectContainer">
            <select className="select" onChange={(e) => { handleChange(e.target.value) }}>

                {
                    countryList.map((item, i) => (
                        <option className="option" key={i} value={item}>{item}</option>
                    ))
                }

            </select>
        </div>
    )
}

export default Countries
