import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW8.module.scss";


export type UserType = {
   _id: number
   name: string
   age: number
}

const initialPeople: UserType[] = [
   {_id: 0, name: 'Кот', age: 3},
   {_id: 1, name: 'Александр', age: 66},
   {_id: 2, name: 'Коля', age: 16},
   {_id: 3, name: 'Виктор', age: 44},
   {_id: 4, name: 'Дмитрий', age: 40},
   {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
   const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

   // need to fix any
   const finalPeople = people.map((p: UserType) => (
      <div className={s.people} key={p._id}>
         <div className={s.people__name}>{p.name}</div>
         <div className={s.people__age}>{p.age}</div>
      </div>
   ))

   const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'UP'}))
   const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'DOWN'}))
   const filterUser = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK', payload: 18}))

   return (
      <div className={s.hw_container}>
         <hr/>
         <h3>homeworks 8</h3>

         {/*should work (должно работать)*/}
         {finalPeople}

         <div className={s.botton_group}>
            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={filterUser}>check 18</SuperButton>
         </div>


         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativePeople/>*/}
         <hr/>
      </div>
   )
}

export default HW8
