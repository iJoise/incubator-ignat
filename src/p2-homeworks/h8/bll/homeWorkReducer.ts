import {UserType} from "../HW8";

type PayloadType = 'UP' | 'DOWN'
type SortActionType = ReturnType<typeof sortAC>
type CheckActionType = ReturnType<typeof checkAC>
export type ActionType = SortActionType | CheckActionType


export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
   switch (action.type) {
      case 'SORT': {
         if (action.payload === "UP") {
            return [
               ...state.sort((a, b) => b.age - a.age)
            ]
         }
         if (action.payload === "DOWN") {
            return [
               ...state.sort((a, b) => a.age - b.age)
            ]
         }
         return state
      }
      case 'CHECK': {
         // need to fix
         return [
            ...state.filter(u => u.age <= 18)
         ]
      }
      default:
         return state
   }
}

const sortAC = (payload: PayloadType) => ({type: 'SORT', payload: payload} as const)
const checkAC = (payload: number) => ({type: 'CHECK', payload: payload} as const)

