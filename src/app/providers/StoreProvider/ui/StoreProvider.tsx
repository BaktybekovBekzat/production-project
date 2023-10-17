import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { IStateSchema } from '../config/StateSchema'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'

interface IProps {
	children?: ReactNode
	initialState?: DeepPartial<IStateSchema>
	asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: FC<IProps> = (props) => {
	const { children, initialState, asyncReducers } = props
	const store = createReduxStore(
		initialState as IStateSchema,
		asyncReducers as ReducersMapObject<IStateSchema>
	)

	return <Provider store={store}>{children}</Provider>
}
