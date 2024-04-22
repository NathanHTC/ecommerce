'use client'
import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'

const Promotion = () => {
    //create a timer state for StatBox
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    //use useEffect to update timer every sec without rerendering
    useEffect(() => {
        const targetDate = new Date('2024-06-25T00:00:00').getTime()

        //called every sec 
        const intervalId = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate - now

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update state
            setTime({ days, hours, minutes, seconds });
            
            if(distance < 0){
                clearInterval(intervalId)
                setTime({ days:0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        return () => clearInterval(intervalId)
    }, []) //empty dependency list, run Once when component is init rendered
    return (
        <section className={classes.promotion}>
            <div className={classes.textBox}>
                <h3 className={classes.title}>Deals of the Month</h3>
                <p>
                    Get ready for a shopping experience like never before with our Deals of the Month! Every
                    purchase comes with exclusive perks and offers, making this month a celebration of savvy
                    choices and amazing deals. Don't miss out! 🎁🛒
                </p>

                <ul className={classes.stats}>
                    <StatBox label="Days" value={time.days} />
                    <StatBox label="Hours" value={time.hours} />
                    <StatBox label="Minutes" value={time.minutes} />
                    <StatBox label="Seconds" value={time.seconds} />
                </ul>
            </div>
        </section>
    )
}


const StatBox = ({ label, value }: { label: string; value: number }) => {
    return (
        <li className={classes.statBox}>
            <h4>{value}</h4>
            <p>{label}</p>
        </li>
    )
}

export default Promotion