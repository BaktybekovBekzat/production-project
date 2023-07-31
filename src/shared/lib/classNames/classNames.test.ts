import { classNames } from './classNames'

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass')
	})

	test('with additional params', () => {
		expect(classNames('someClass', {}, ['class-1', 'class-2'])).toBe(
			'someClass class-1 class-2'
		)
	})

	test('with mods params', () => {
		expect(
			classNames(
				'someClass',
				{
					hovered: true,
					selected: false,
				},
				['class-1', 'class-2']
			)
		).toBe('someClass class-1 class-2 hovered')
	})
})
