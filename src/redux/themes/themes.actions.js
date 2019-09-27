import ThemeActionTypes from './themes.types';

export const resetTheme = () => ({
	type:ThemeActionTypes.RESET_THEME,
});
export const setPrimaryColour = (colour) => ({
	type:ThemeActionTypes.SET_PRIMARY_COLOUR,
	payload:colour
});
export const setSecondaryColour = (colour) => ({
	type:ThemeActionTypes.SET_SECONDARY_COLOUR,
	payload:colour
});
// export const setPrimaryBtnBG = (colour) => ({
// 	type:ThemeActionTypes.SET_PRIMARY_BTN_BG,
// 	payload:colour
// });
// export const setPrimaryBtnBGHover = (colour) => ({
// 	type:ThemeActionTypes.SET_PRIMARY_BTN_BG_HOVER,
// 	payload:colour
// });
// export const setPrimaryBtnText = (colour) => ({
// 	type:ThemeActionTypes.SET_PRIMARY_BTN_TEXT,
// 	payload:colour
// });
// export const setPrimaryBtnTextHover = (colour) => ({
// 	type:ThemeActionTypes.SET_PRIMARY_BTN_TEXT_HOVER,
// 	payload:colour
// });