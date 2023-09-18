import { useActions } from "../../hooks/useActions";
import useFavorites from "../../hooks/useFavorites";
import { useCallback } from "react";

export function RecipeItem({ recipe }) {
	const { favorites, checkIfExists } = useFavorites();
	const { toggleFav } = useActions();

	const isExists = useCallback(() => {
		return checkIfExists(recipe.id);
	}, [checkIfExists, recipe.id]);

	return (
		<div className="bg-stone-400 py-2 px-3 w-1/5 rounded-2xl">
			<h2 className="text-xl text-indigo-900 font-bold tracking-wide">{recipe.name}</h2>
			<button
				className=" bg-indigo-300 p-1 px-2 w-full text-start text-sm font-bold rounded-lg hover:bg-indigo-500 hover:text-gray-400"
				onClick={() => toggleFav(recipe)}>
				{isExists() ? 'Remove from favorites' : 'Add to favorites'}
			</button>
		</div>
	);
}
