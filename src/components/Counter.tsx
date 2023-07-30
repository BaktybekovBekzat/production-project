import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)

	const increment = () => setCount((count) => ++count)

	const decrement = () => setCount((count) => --count)

	return (
		<div className={classes.counter}>
			<button onClick={decrement}>DEC</button>
			<span>{count}</span>
			<button onClick={increment}>INC</button>
		</div>
	)
}
