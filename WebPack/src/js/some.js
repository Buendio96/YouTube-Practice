import '../styles/style.css'

let x = 0
const counter = () => {
	x++
	return (
		document.addEventListener('click', console.log(`Your click ${x}`))

	)
}

document.addEventListener('click', () => { counter() })
document.addEventListener('click', console.log('1'))