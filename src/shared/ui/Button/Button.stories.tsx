import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		children: 'Primary',
	},
}

export const Clear: Story = {
	args: {
		theme: ButtonTheme.CLEAR,
		children: 'Clear',
	},
}

export const Outline: Story = {
	args: {
		theme: ButtonTheme.OUTLINE,
		children: 'OUTLINE',
	},
}

export const PrimaryDark: Story = {
	args: {
		children: 'Primary',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearDark: Story = {
	args: {
		theme: ButtonTheme.CLEAR,
		children: 'Clear',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDark: Story = {
	args: {
		theme: ButtonTheme.OUTLINE,
		children: 'OUTLINE',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
