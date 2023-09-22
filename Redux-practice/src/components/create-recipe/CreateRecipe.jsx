import { useState } from "react"
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

export default function CreateRecipe() {
	const defValue = {
		name: '',
		image: '',
		recipe: ''
	}
	const [recipe, setRecipe] = useState(defValue);

	const [createRecipe] = useCreateRecipeMutation();

	const handlesubmit = e => {
		e.preventDefault(),
			createRecipe(recipe).then(() => {
				setRecipe(defValue)
			})
	}


	return (
		<div
			className="mt-4 px-4"
		>
			<form
				className="flex flex-col max-w-[500px] relative"
				onSubmit={handlesubmit}>
				<label>
					<input
						className="w-1/2 outline-none bg-slate-200 px-3 py-1 rounded text-lg font-semibold tracking-wide focus:border-4 border-slate-500 "
						type="text"
						placeholder="Enter recipe name"
						value={recipe.name}
						onChange={e => setRecipe({
							...recipe,
							name: e.target.value
						})}
					/>
				</label>
				<label>
					<input
						className="w-1/2 outline-none bg-slate-200 px-3 py-1 rounded text-lg font-semibold tracking-wide focus:border-4 border-slate-500 mt-2"
						type="text"
						placeholder="Enter image URL"
						value={recipe.image}
						onChange={e => setRecipe({
							...recipe,
							image: e.target.value
						})}
					/>
				</label>
				<textarea
					className="mt-2 p-2 outline-none font-semibold tracking-wide resize-none h-20 rounded-md bg-red-100 focus:border-4 border-red-500"
					placeholder="Enter recipe description"
					value={recipe.recipe}
					onChange={e => setRecipe({
						...recipe,
						recipe: e.target.value
					})}
				/>
				<button
					type="submit"
					className=" absolute top-0 right-0 px-5 py-1.5 font-semibold tracking-wide rounded-bl-xl text-lg bg-red-100"
				>
					Create new recipe
				</button>
			</form>
		</div>
	)
}