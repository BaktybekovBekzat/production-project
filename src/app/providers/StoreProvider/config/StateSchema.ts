import {
	AnyAction,
	CombinedState,
	Dispatch,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ICounterSchema } from 'entities/Counter'
import { IProfileSchema } from 'entities/Profile'
import { IUserSchema } from 'entities/User'
import { ILoginSchema } from 'features/AuthByUsername'
import { NavigateOptions, To } from 'react-router-dom'

export interface IStateSchema {
	counter: ICounterSchema
	user: IUserSchema

	loginForm?: ILoginSchema
    profile?: IProfileSchema
}

export type StateSchemaKey = keyof IStateSchema

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
	reducerManager: IReducerManager
}

export interface IReducerManager {
	getReducerMap: () => ReducersMapObject<IStateSchema>
	reduce: (
		state: IStateSchema,
		action: AnyAction
	) => CombinedState<IStateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface IThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface IThunkConfig<T> {
    rejectValue: T
    extra: IThunkExtraArg
    dispatch?: Dispatch
}
