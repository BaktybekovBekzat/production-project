import type { Preview } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/decorators/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/decorators/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/decorators/RouterDecorator'
import { StoreDecorator } from '../../src/shared/config/decorators/StoreDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		StoreDecorator(undefined),
		RouterDecorator,
		ThemeDecorator(Theme.LIGHT),
		StyleDecorator,
	],
}

export default preview
