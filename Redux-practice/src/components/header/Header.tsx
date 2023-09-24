import { BsBox2Heart } from 'react-icons/bs'
import useFavorites from '../../hooks/useFavorites';


export default function Header() {
	const { favorites } = useFavorites();
	return (
		<header className="flex justify-between px-10 items-center h-16 bg-zinc-900">
			<h2 className="text-white font-bold text-3xl">Class</h2>
			<div className='relative flex'>
				<BsBox2Heart className=' text-white text-4xl' />
				<span className='absolute -right-4 -bottom-3 text-slate-800 bg-gray-200/80 w-8 h-8 text-center rounded-full font-bold text-[22px]'>{favorites.length}</span>
			</div>
		</header>
	)
}