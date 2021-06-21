import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import preloader from '../../assets/image/loading.svg'
import s from "./hw10.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectAllState} from "./bll/selector";
import {Dispatch} from "redux";
import {loadingAC, LoadingType} from "./bll/loadingReducer";
import container from "../h8/HW8.module.scss"



function HW10() {

   const dispatch = useDispatch<Dispatch<LoadingType>>();
   const {loading} = useSelector(selectAllState)


    const setLoading = () => {
       dispatch(loadingAC(true))

       setTimeout(() => {
          dispatch(loadingAC(false))
       }, 3000)
        console.log('loading...')
    };

    return (
        <div className={container.hw_container}>
            <hr/>
           <h3>homeworks 10</h3>

            {loading
                ? (
                  <div className={s.isFetching}>
                     <img src={preloader} alt={'loading spinner'}/>
                     <div className={s.overlay}/>
                  </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
