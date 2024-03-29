import {
	IStateSchema,
	IReduxStoreWithManager,
	IThunkConfig,
} from './config/StateSchema'
import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore, AppDispatch } from './config/store'

export {
	StoreProvider,
	createReduxStore,
	IStateSchema,
	IReduxStoreWithManager,
	AppDispatch,
	IThunkConfig,
}
