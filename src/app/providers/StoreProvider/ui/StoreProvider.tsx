import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { IStateSchema } from '../config/StateSchema'
import { DeepPartial } from '@reduxjs/toolkit'

interface IProps {
	children?: ReactNode
    initialState?: DeepPartial<IStateSchema>
}

export const StoreProvider: FC<IProps> = (props) => {
	const { children, initialState } = props
	const store = createReduxStore(initialState as IStateSchema)

	return <Provider store={store}>{children}</Provider>
}
