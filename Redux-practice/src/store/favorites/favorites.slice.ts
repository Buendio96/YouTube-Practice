import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

const initialState: IRecipe[] = [];

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFav: (state, action: PayloadAction<IRecipe>) => {
			const recipe = action.payload;
			const isExists = state.some(item => item.id === recipe.id);
			if (isExists) {
				const index = state.findIndex(item => item.id === recipe.id);
				if (index !== -1) {
					state.splice(index, 1);
				};
			} else {
				state.push(recipe);
			}
		}
	}
});

export const { actions, reducer } = favoritesSlice;