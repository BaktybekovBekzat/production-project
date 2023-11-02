import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { IStateSchema } from '../config/StateSchema'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface IProps {
	children?: ReactNode
	initialState?: DeepPartial<IStateSchema>
	asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: FC<IProps> = (props) => {
	const { children, initialState, asyncReducers } = props

	const navigate = useNavigate()

	const store = createReduxStore(
		initialState as IStateSchema,
		asyncReducers as ReducersMapObject<IStateSchema>,
		navigate
	)

	return <Provider store={store}>{children}</Provider>
}
