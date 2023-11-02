import { Decorator } from '@storybook/react'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
}

export const StoreDecorator = (
	state: DeepPartial<IStateSchema>,
	asyncReducers?: ReducersList
): Decorator => {
	return (Story) => (
		<StoreProvider
			initialState={state}
			asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
		>
			<Story />
		</StoreProvider>
	)
}
