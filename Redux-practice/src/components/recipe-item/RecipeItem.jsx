import { useActions } from "../../hooks/useActions";
import useFavorites from "../../hooks/useFavorites";
import useRecipe from "../../hooks/useRecipe";

export function RecipeItem({ recipe }) {
	const { checkIfExists } = useFavorites();
	const { toggleFav } = useActions();
	const { showRecipe, toggleShowRecipe } = useRecipe();

	return (
		<div className="bg-stone-400  -mx-4 flex flex-col w-1/4 rounded-2xl hover:shadow-neutral-500 shadow-xl">
			<h2 className="text-xl text-center m-2 text-indigo-900 min-h-[60px] font-bold tracking-wide">{recipe.name}</h2>
			<div className="h-36 max-w-[300px]  relative left-1/2 -translate-x-1/2">
				<img
					className="absolute w-full h-full top-0 legt-0 right-0 bottom-0 object-fit"
					src={recipe.image} alt={recipe.name} />
			</div>
			<div className="mx-2 my-4">
				<button
					className="bg-indigo-300 py-1 px-2 w-full text-start text-sm font-bold rounded-lg hover:bg-indigo-500 hover:text-gray-400"
					onClick={() => toggleFav(recipe)}>
					{checkIfExists(recipe.id) ? 'Remove from favorites' : 'Add to favorites'}
				</button>
				<button
					className=" bg-amber-300 py-1 px-2 mt-2 w-full text-start text-sm font-bold rounded-lg"
					onClick={() => toggleShowRecipe()}
				>
					{showRecipe ? 'Hide the recipe' : 'Show the recipe'}
				</button>
				{showRecipe ?
					<p
						className=" bg-red-300 py-1 px-2 mt-3 rounded-xl text-[15px] font-semibold"
						onClick={() => toggleShowRecipe()}
					>
						{recipe.recipe}
					</p> : null}
			</div>
		</div >
	);
}
