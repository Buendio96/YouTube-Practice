import { RecipeItem } from "./recipe-item/RecipeItem"

function App() {
	return (
		<>
			<div>
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
			</div>
		</>
	)
}

export default App
