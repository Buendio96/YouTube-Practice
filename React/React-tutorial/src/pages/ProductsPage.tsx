import { useProducts } from '../hooks/products'
import { Product } from '../components/Product'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { useContext } from 'react'
import { IProduct } from '../models'
import { ModalContext } from '../context/ModalContext'



export function ProductsPage() {
	const { products, error, loading, addProduct } = useProducts();
	const { modal, open, close } = useContext(ModalContext);


	const createHandler = (product: IProduct) => {
		close()
		addProduct(product);
	}
	return (
		<div className='flex flex-col items-center max-w-6xl mt-10 mx-auto'>
			{modal && <Modal onClose={() => close()} title='Create a new product'>
				<CreateProduct onCreate={createHandler} />
			</Modal>}
			<h1 className=" text-6xl text-cyan-700">Products List</h1>
			<button
				className='fixed right-24  bottom-4 w-20 h-20 flex items-center justify-center rounded-full  bg-emerald-300 '
				onClick={() => open()}>
				<div className='w-8 h-2 absolute bg-slate-50'></div>
				<div className='w-2 h-8 bg-slate-50'></div>
			</button>
			{loading && <Loader />}
			{error && <ErrorMessage error={error} />}
			<div className='flex flex-wrap items-start justify-around gap-2 mt-10'>
				{products.map(product =>
					<Product product={product} key={product.id} />
				)}
			</div>
		</div>
	)
};

