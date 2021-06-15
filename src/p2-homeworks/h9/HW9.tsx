import React from 'react'
import Clock from './Clock'
import s from "../h8/HW8.module.scss";

function HW9() {
    return (
        <div className={s.hw_container}>
            <hr/>
           <h3>homeworks 9</h3>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
