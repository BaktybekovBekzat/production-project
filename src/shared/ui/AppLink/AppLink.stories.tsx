import { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/',
		children: 'AppLink',
	},
}

export default meta

type Story = StoryObj<typeof AppLink>

export const Light: Story = {}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}
