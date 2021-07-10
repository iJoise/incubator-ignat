import React, {ChangeEvent, useEffect, useState} from "react";
import s from "../h12/HW12.module.scss";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemeStateType} from "../h12/bll/themeReducer";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestsAPI";
import container from "../h8/HW8.module.scss"
import {Request} from "./Request";

function HW13() {


   const themeObj = useSelector<AppStoreType, ThemeStateType>(state => state.theme);
   const {theme} = themeObj;

   const [checked, setChecked] = useState<boolean>(false);
   const [resp, setResp] = useState<string>('');

   const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked)
   }

   useEffect(() => {
      if (checked) {
         requestAPI.testRequest()
            .then(response => {
               console.log(response)
               setResp(response.data.info)
            })
            .catch(error => {
               console.log( {...error} );
               const err = error.response ? error.response.data.errorText : error.message
               console.log( err);
               setResp(err)
            })
      }
   }, [checked]);


   return (
      <div className={`${s[theme]}`}>
         <div className={container.hw_container}>
            <hr/>
            <span className={s[theme + '-text']}>
                <h2>homeworks 13</h2>
            </span>
            <SuperCheckbox
               onChange={changeHandler}
            >Отправить запрос</SuperCheckbox>
            <Request
            theme={theme}
            resp={resp}
            />
            <hr/>
         </div>
      </div>
   );
}

export default HW13;
