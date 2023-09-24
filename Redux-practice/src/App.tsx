import { useState } from "react";
import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/Header";
import { RecipeItem } from "./components/recipe-item/RecipeItem"
import { useGetRecipesQuery } from "./store/api/api"


export default function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [queryTerm, setSQeryTerm] = useState('');
	const { isLoading, data } = useGetRecipesQuery(queryTerm);

	const handleSearch = () => {
		setSQeryTerm(searchTerm)
	}
	const divEl =
		<div className="fixed bottom-5 right-20  text-2xl font-semibold text-indigo-500">
			{isLoading ? 'Loading...' : 'Not Found'}
		</div>

	return (
		<div className="bg-neutral-800 min-h-screen">
			<Header />
			<div className="flex justify-between mt-4 px-4">
				<CreateRecipe />
				<div className="w-1/2 flex justify-end items-center">
					<div className="w-80  flex flex-col">
						<span className="flex justify-between">
							<h5 className="text-xl text-cyan-500 tracking-wider font-bold">
								If you wanna find
							</h5>
							<button
								className="text-xl tracking-wider font-bold bg-cyan-500 px-3 rounded-lg text-gray-500"
								onClick={
									() => handleSearch()
								}
							>
								Click here
							</button>
						</span>
						<input
							className="mt-4 rounded-lg outline-none px-3 py-2   font-semibold tracking-wide bg-red-100"
							type="search"
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							placeholder="Enter search term"
						/>
					</div>
				</div>
			</div>
			<section className="px-8 py-4 flex  flex-wrap justify-between items-start gap-y-3 ">
				{isLoading ? divEl : data ? data.map(recipe =>
					<RecipeItem
						key={recipe.id}
						recipe={recipe}
					/>
				) : divEl}
			</section>
		</div>
	)
}

