import { useDispatch, useSelector } from "react-redux"
import { actions } from "../store/favorites/favorites.slice";

export function RecipeItem({ recipe }) {
	const favorites = useSelector(state => state.favorites);
	console.log(favorites)
	const dispatch = useDispatch()
	return (
		<div>
			<h2 className=" text-lg font-semibold">{recipe.name}</h2>
			<button
				onClick={() => {
					dispatch(actions.toggleFav(recipe))
					console.log(favorites)
				}}>Add to favorites</button>
		</div>
	)
}