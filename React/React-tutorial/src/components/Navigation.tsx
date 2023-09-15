import { Link } from 'react-router-dom'

export function Navigation() {
	return (
		<nav className="flex h-14  justify-between px-48 bg-slate-500 items-center py-5">
			<span className="font-bold text-3xl">React 2023</span>
			<span className='flex gap-x-5 text-xl font-semibold text-neutral-200'>
				<Link to='/'>Products</Link>
				<Link to='/about'>About</Link>
			</span>
		</nav>
	)
}