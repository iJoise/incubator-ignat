const CHANGE_THEME = 'hw12/CHANGE_THEME';

type ThemeType =  'red' | 'some' | 'blue'


export type ThemeStateType = {
   theme: 'dark' | ThemeType
}

const initState: ThemeStateType = {
    theme: 'dark'
};

export const themeReducer = (state:ThemeStateType = initState, action: changeThemeActionType): ThemeStateType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: ThemeStateType): any => ({type: CHANGE_THEME, payload: {theme}} as const);

type changeThemeActionType = ReturnType<typeof changeThemeAC>
