import React, { useEffect, useState } from 'react';
import "./clock.css";

/**
 * The Clock function displays the current time and updates it every second using React's useState and
 * useEffect hooks.
 * @returns A functional component named `Clock` is being returned. It displays the current time in a
 * paragraph element. The time is updated every second using `setInterval` and `useEffect` hooks. The
 * `useEffect` hook is used to clean up the interval when the component unmounts.
 */
const Clock = () => {
    
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        // update the time every second
        const intervalId = setInterval(()=>{
            updateTime();
        },1000)

        return()=>{
            clearInterval(intervalId)
        }
    },[])  

    const updateTime = ()=>{
        setTime(new Date().toLocaleTimeString());

    }
    return (
        <div className='Time'>
            <p>{time}</p>
        </div>
    )
}
export default Clock;