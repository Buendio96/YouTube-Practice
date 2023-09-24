import { useCallback } from "react";
import { useTypedSelector } from "./useTypedSelector";

export default function useFavorites() {
	const favorites = useTypedSelector(state => state.favorites);
	const checkIfExists = useCallback((recipeId: number) => {
		return favorites.some(r => r.id === recipeId);
	}, [favorites]);
	return { favorites, checkIfExists };
}
