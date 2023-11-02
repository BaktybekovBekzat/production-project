import { getCounter } from './getCounter'
import { IStateSchema } from 'app/providers/StoreProvider'

describe('getCounter', () => {
	test('should return counter value', () => {
		const state: DeepPartial<IStateSchema> = {
			counter: {
				value: 1,
			},
		}
		expect(getCounter(state as IStateSchema)).toEqual({ value: 1 })
	})
})
