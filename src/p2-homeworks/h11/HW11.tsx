import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import container from "../h8/HW8.module.scss"
import s from "./hw11.module.scss";




function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState([value1, 100])

   const onChangeRange = (value: number) => {
       setValue1(value)
      setValue2(value2.map((v, i) => i === 0 ? value : v))
   }
 const onChangeDoubleRange = (value: number | number[]) => {
      setValue2(value as number[])
    setValue1(value2[0])
   }
    return (
        <div className={container.hw_container}>
            <hr/>
           <h3>homeworks 11</h3>

            {/*should work (должно работать)*/}
            <div className={s.rangeTop}>
                <span>{value1}</span>
                <SuperRange
                   min={0}
                   max={100}
                   value={value1}
                   onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.rangeBottom}>
                <SuperDoubleRange
                   value={value2}
                   onChangeRange={onChangeDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
               <div className={s.rangeBottom_num}>
                  <span>{value2[0]}</span>
                  <span>{value2[1]}</span>
               </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
