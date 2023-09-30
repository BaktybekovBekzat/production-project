import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export function createReduxStore(initialState?: IStateSchema) {
	const rootReducers: ReducersMapObject<IStateSchema> = {
		counter: counterReducer,
		user: userReducer,
	}

	return configureStore<IStateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}
