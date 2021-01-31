import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

export const MainPage = () => {
    return (<><h1>메인 페이지</h1></>)
}