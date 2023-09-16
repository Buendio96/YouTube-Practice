import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFav: (state, action) => {
			const recipe = action.payload;
			const index = state.findIndex(r => r.id === recipe.id);
			if (!index) {
				state.splice(index, 1);
			} else {
				state.push(recipe);
			}
		}
	}
});

export const { actions, reducer } = favoritesSlice;