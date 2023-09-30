import { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Input> = {
	title: 'shared/Input',
	component: Input,
}

export default meta

type Story = StoryObj<typeof Input>

export const Primary: Story = {}

export const PrimaryPlaceholder: Story = {
	args: {
		placeholder: 'Login',
	},
}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const DarkPlaceholder: Story = {
	args: {
		placeholder: 'Login',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
