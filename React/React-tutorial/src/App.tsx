import { useEffect, useState } from 'react'
import { Product } from './components/Product'
import axios, { AxiosError } from 'axios'
import { IProduct } from './models'
function App() {
	const [count, setCount] = useState(0)
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	async function fetchProd() {
		try {
			setError('')
			setLoading(true)
			const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=8')
			setProducts(res.data)
			setLoading(false)
		} catch (e: unknown) {
			const error = e as AxiosError
			setLoading(false)
			setError(error.message)
		}
	}
	useEffect(() => {
		fetchProd()
	}, [])
	return (
		<div className=' max-w-6xl mx-auto'>
			<h1 className=" text-3xl text-cyan-700">
				Products List
			</h1>
			<button
				className='mt-3 border border-black p-2'
				onClick={() => setCount(count + 1)}>
				Click me {count}
			</button>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<div className='flex flex-wrap items-start justify-around gap-2'>
				{products.map(product =>
					<Product product={product} key={product.id} />
				)}
			</div>
		</div>
	)
}

export default App
