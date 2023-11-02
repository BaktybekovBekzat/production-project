import { memo } from 'react'
import './Spinner.scss'

export const Spinner = memo(() => {
	return (
		<div className='lds-ring'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
})
