import React from 'react'
import s from "./Error404.module.scss";



function Error404() {
    return (
        <div className={s.body}>
           <div className={s.rocket}/>
           <div className={s.hgroup}>
              <h1>Page Not Found</h1>
              <h2>We couldn't find what you were looking for.</h2>
           </div>
        </div>
    )
}

export default Error404
