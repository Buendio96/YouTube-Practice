import Header from "./components/header/header"
import { RecipeItem } from "./components/recipe-item/RecipeItem"

function App() {
	return (
		<div className="bg-neutral-800 min-h-screen">
			<Header />
			<section className="px-8 py-4 flex flex-wrap gap-x-5 gap-y-3 ">
				<RecipeItem recipe={{
					id: 1,
					name: 'Bolognese'
				}} />
				<RecipeItem recipe={{
					id: 2,
					name: 'Carbonara'
				}} />
				<RecipeItem recipe={{
					id: 3,
					name: 'Penne tuna'
				}} />
			</section>
		</div>
	)
}

export default App
