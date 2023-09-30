import { counterActions, counterReducer } from './counterSlice'
import { ICounterSchema } from '../types/counterSchema'

describe('counter slice test', () => {
	test('decrement test', () => {
		const state: ICounterSchema = {
			value: 10,
		}
		expect(counterReducer(state, counterActions.decrement)).toEqual({
			value: 9,
		})
	})

	test('increment test', () => {
		const state: ICounterSchema = {
			value: 10,
		}
		expect(counterReducer(state, counterActions.increment)).toEqual({
			value: 11,
		})
	})

	test('should return empty state', () => {
		expect(counterReducer(undefined, counterActions.increment)).toEqual({
			value: 1,
		})
	})
})
