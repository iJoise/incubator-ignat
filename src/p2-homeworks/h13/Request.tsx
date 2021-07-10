import React from "react";
import st from "./HW13.module.scss";
import s from "../h12/HW12.module.scss";

type RequestPropsType = {
   theme: string
   resp: string
}


export const Request: React.FC<RequestPropsType> = ({theme, resp}) => {

   return (
      <div className={`${st.resp} ${s[theme + '-text']}`}>Ответ: {resp}</div>
   )
}
