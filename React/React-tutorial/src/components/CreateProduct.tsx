import { useState } from "react"
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

interface CreateProductProps {
	onCreate: (product: IProduct) => void
};

const prodData: IProduct = {
	title: '',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 1,
		count: 2
	}

};
export function CreateProduct({ onCreate }: CreateProductProps) {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const submitHundler = async (event: React.FormEvent) => {
		event.preventDefault();
		setError('');
		if (value.trim().length === 0) {
			setError('Please enter correct title of product');
			return;
		};
		prodData.title = value
		const res = await axios.post<IProduct>('https://fakestoreapi.com/products', prodData)
		onCreate(res.data)
	};

	const changeHundler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	};

	return (
		<form
			onSubmit={submitHundler}
		>
			{error && <ErrorMessage error={error} />}
			<div className="flex justify-between">
				<input
					type="text"
					placeholder="Enter the product name"
					className="border py-4 px-2 w-4/5"
					value={value}
					onChange={changeHundler}
				/>
				<button
					type="submit"
					className="py-5 px-3 w-1/5 bg-sky-700 text-stone-400 font-bold uppercase text-lg"
				>
					Create
				</button>
			</div>
		</form>
	)
}