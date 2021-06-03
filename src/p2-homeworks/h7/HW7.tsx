import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from "./HW7.module.scss";


const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <hr/>
           <h3>homeworks 7</h3>

            {/*should work (должно работать)*/}
           <div className={s.hw_container}>
              <div>
                 <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                 />
              </div>
              <div>
                 <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                 />
              </div>
              <hr/>
              {/*для личного творчества, могу проверить*/}
              {/*<AlternativeSuperSelect/>*/}
              {/*<AlternativeSuperRadio/>*/}
              <hr/>
           </div>
        </div>
    )
}

export default HW7
