import { DeepPartial } from '@reduxjs/toolkit'
import { ILoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice test', () => {
	test('test set username', () => {
		const state: DeepPartial<ILoginSchema> = {
			username: 'username',
		}
		expect(
			loginReducer(
				state as ILoginSchema,
				loginActions.setUsername('username')
			)
		).toEqual({ username: 'username' })
	})

	test('test set password', () => {
		const state: DeepPartial<ILoginSchema> = {
			password: 'password',
		}
		expect(
			loginReducer(
				state as ILoginSchema,
				loginActions.setPassword('password')
			)
		).toEqual({ password: 'password' })
	})
})
