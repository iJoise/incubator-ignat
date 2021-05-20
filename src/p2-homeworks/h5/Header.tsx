import React from 'react'
import {NavLink} from 'react-router-dom';
import s from "./Header.module.scss";
import {PATH} from "./Routes";


function Header() {
   return (
      <div className={s.header}>
         <div className={s.logo}>IT-INCUBATOR</div>
         <div className={s.navigation}>
            <div className={s.arrow}>« <span> Menu</span></div>
            <nav className={s.nav}>
               <ul className={s.list}>
                  <li>
                     <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>
                        PreJunior
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink}>
                        Junior
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeLink}>
                        JuniorPlus
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Header
