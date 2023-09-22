import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/header"
import { RecipeItem } from "./components/recipe-item/RecipeItem"
import { useGetRecipesQuery } from "./store/api/api"

export default function App() {
	const { isLoading, data } = useGetRecipesQuery();
	return (
		<div className="bg-neutral-800 min-h-screen">
			<Header />
			<div>
				<CreateRecipe />
			</div>
			<section className="px-8 py-4 flex flex-wrap justify-between items-start gap-y-3 ">
				{isLoading ? <div>Loading...</div>
					: data ? data.map(recipe =>
						<RecipeItem
							key={recipe.id}
							recipe={recipe}
						/>
					)
						: <div>Not found</div>}
			</section>
		</div>
	)
}

