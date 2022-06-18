import {useState} from 'react'

function BaseInput(props) {
    const {label, type, value, onChange, required} = props

    const handleChange = (e) => {
        onChange(e.target.value)
    }
    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} onChange={handleChange}/>
        </div>
    )
}

export default BaseInput