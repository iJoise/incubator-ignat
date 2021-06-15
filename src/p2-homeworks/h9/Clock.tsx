import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./Clock.module.scss";


function Clock() {
   const [timerId, setTimerId] = useState<number>(0)
   const [date, setDate] = useState<Date>(new Date())
   const [show, setShow] = useState<boolean>(false)

   const stop = () => {
      clearInterval(timerId)
   }
   const start = () => {
      stop()
      const id: number = window.setInterval(() => {
         setDate(new Date())
      }, 1000)
      setTimerId(id)
   }

   const onMouseEnter = () => {
      setShow(true)
   }
   const onMouseLeave = () => {
      setShow(false)
   }

   const stringTime = `Time: ${date.toLocaleTimeString()}`
   const stringDate = `Date: ${date.toLocaleDateString()}`

   return (
      <div>
         <div className={s.date_container}>
            <div
               className={s.clock}
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
            >
               {stringTime}
            </div>
            {
               show && (
                  <div className={s.date}>
                     {stringDate}
                  </div>
               )
            }</div>
         <SuperButton onClick={start}>start</SuperButton>
         <SuperButton onClick={stop}>stop</SuperButton>

      </div>
   )
}

export default Clock
