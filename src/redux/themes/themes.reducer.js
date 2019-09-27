import ThemesActionTypes from './themes.types';

import {THEME_DATA} from './themes.data';

// const THEME_DATA = THEME_DATA;

const themesReducer = (state = THEME_DATA, action) => {
	switch (action.type){
		case ThemesActionTypes.RESET_THEME:
			return {
				...state,
				...THEME_DATA
			}
		case ThemesActionTypes.SET_PRIMARY_COLOUR:
			return {
				...state,
				primary:action.payload
			}
		case ThemesActionTypes.SET_SECONDARY_COLOUR:
			return {
				...state,
				secondary:action.payload
			}
		case ThemesActionTypes.SET_PRIMARY_BTN_BG:
			return {
				...state,
				primaryBtnBG:action.payload
			}
		case ThemesActionTypes.SET_PRIMARY_BTN_BG_HOVER:
			return {
				...state,
				primaryBtnBGHover:action.payload
			}
		case ThemesActionTypes.SET_PRIMARY_BTN_TEXT:
			return {
				...state,
				primaryBtnText:action.payload
			}
		case ThemesActionTypes.SET_PRIMARY_BTN_TEXT_HOVER:
			return {
				...state,
				primaryBtnTextHover:action.payload
			}
		default:
			return state;
	}
}

export default themesReducer;