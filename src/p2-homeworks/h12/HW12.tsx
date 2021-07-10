import React from "react";
import s from "./HW12.module.scss";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC, ThemeStateType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import container from "../h8/HW8.module.scss";

const themes = ['dark', 'red', 'some', 'blue'];

function HW12() {


   const themeObj = useSelector<AppStoreType, ThemeStateType>(state => state.theme);
   const {theme} = themeObj;

   const dispatch = useDispatch()

   const changeTheme = (value: ThemeStateType) => {
      dispatch(changeThemeAC(value))
   }

   // useDispatch, onChangeCallback

   return (
      <div className={`${s[theme]}`}>
         <div className={container.hw_container}>
            <hr/>
            <span className={s[theme + '-text']}>
                <h2>homeworks 12</h2>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
               name={'radio'}
               value={theme}
               options={themes}
               onChangeOption={changeTheme}
            />
            <hr/>
         </div>
      </div>
   );
}

export default HW12;
