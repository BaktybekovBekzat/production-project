import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword test', () => {
	test('should return password', () => {
		const state: DeepPartial<IStateSchema> = {
			loginForm: {
				password: 'password',
			},
		}
		expect(getLoginPassword(state as IStateSchema)).toEqual('password')
	})

	test('should work with empty state', () => {
		const state: DeepPartial<IStateSchema> = {}
		expect(getLoginPassword(state as IStateSchema)).toEqual('')
	})
})