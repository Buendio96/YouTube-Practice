import { useSelector } from "react-redux";
import { useCallback } from "react";

export default function useFavorites() {
	const favorites = useSelector(state => state.favorites);

	const checkIfExists = useCallback((recipeId) => {
		return favorites.some(r => r.id === recipeId);
	}, [favorites]);

	return { favorites, checkIfExists };
}
