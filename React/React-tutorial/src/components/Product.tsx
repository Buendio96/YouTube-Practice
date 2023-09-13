import { useState } from 'react'
import { IProduct } from "../models"
interface ProductProps {
	product: IProduct
}


export function Product({ product }: ProductProps) {
	const [details, setDetails] = useState(false)


	const btnClasses = [
		'px-2 py-3 font-bold text-cyan-200 mt-2',
		details ? 'bg-orange-800' : 'bg-teal-800'
	]
	return (
		<div className="w-1/4  border flex flex-col justify-between border-slate-900 p-3 mt-2">
			<img className=" w-36 h-52 mx-auto" src={product.image} alt="" />
			<div className="flex mt-3 h-24">
				<h2 className="text-lefts">{product.title}</h2>
				<span className=" font-bold ml-3">{product.price}$</span>
			</div>
			<h3 className="text-end text-zinc-500 font-bold text-xs">{product.category}</h3>
			<button
				className={btnClasses.join(' ')}
				onClick={() => setDetails(prev => !prev)}>
				{details ? 'Hide details' : 'Show details'}
			</button>
			{details &&
				<p onClick={() => setDetails(false)}>{product.description}</p>
			}
		</div>
	)
}