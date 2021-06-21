export enum ACTIONS_TYPE {
   LOADING_TOGGLE = 'LOADING_TOGGLE'
}

export type InitStateType = {
   loading: boolean
}

const initState = {
   loading: false
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingType): InitStateType => { // fix any
   switch (action.type) {
      case ACTIONS_TYPE.LOADING_TOGGLE: {
         return {
            ...state,
            ...action.payload
         }
      }
      default:
         return state
   }
}

export type LoadingType = {
   type: ACTIONS_TYPE.LOADING_TOGGLE
   payload: { loading: boolean }
}


export const loadingAC = (loading: boolean): LoadingType => {
   return {type: ACTIONS_TYPE.LOADING_TOGGLE, payload: {loading}}
}