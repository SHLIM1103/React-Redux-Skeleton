import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

export const UserLoginPage = () => {
    const test = e => {
        e.preventDefault()
        alert(`click`)
        axios.get(`http://localhost:8080/test`)
        .then(response => {
            alert(`성공! ${JSON.stringify(response.data)}`)
        })
    }
    return (<>
    <button onClick={ test }>Hello Boot</button>
    </>)
}