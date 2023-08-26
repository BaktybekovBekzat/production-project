import { FC } from 'react'

export const Spinner: FC = () => {
	return (
		<div className='lds-ring'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
