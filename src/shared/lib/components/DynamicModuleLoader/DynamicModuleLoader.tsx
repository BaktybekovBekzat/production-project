import { Reducer } from '@reduxjs/toolkit'
import { IReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface IProps {
	children: ReactNode
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<IProps> = (props) => {
	const { children, reducers, removeAfterUnmount } = props
	const store = useStore() as IReduxStoreWithManager
	const dispatch = useDispatch()

	useEffect(() => {
		Object.entries(reducers).forEach(
			([name, reducer]: ReducersListEntry) => {
				store.reducerManager.add(name, reducer)
				dispatch({ type: `@INIT ${name} reducer` })
			}
		)

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(
					([name]: ReducersListEntry) => {
						store.reducerManager.remove(name)
						dispatch({ type: `@DESTORY ${name} reducer` })
					}
				)
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return <>{children}</>
}
