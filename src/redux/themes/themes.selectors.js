import {createSelector} from 'reselect';

const selectTheme = state => state.theme;

// export const selectPrimaryColour = createSelector(
//     [selectTheme],
//     (theme) => theme.primary6
// );
export const selectThemeSettings = createSelector(
	[selectTheme],
	(theme) => theme
);