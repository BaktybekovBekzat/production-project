import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Decorator } from '@storybook/react'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
	loginForm: loginReducer,
}

export const StoreDecorator = (
	state: DeepPartial<IStateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
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
