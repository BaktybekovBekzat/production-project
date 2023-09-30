import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

interface IProps {}

export const Counter: FC<IProps> = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)

	const inc = () => {
		dispatch(counterActions.increment())
	}

	const dec = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1 data-testid='value-title'>{counterValue}</h1>
			<Button data-testid='increment-btn' onClick={inc}>
				+
			</Button>
			<Button data-testid='decrement-btn' onClick={dec}>
				-
			</Button>
		</div>
	)
}
