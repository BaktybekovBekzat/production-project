import { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/decorators/StoreDecorator'

const meta: Meta<typeof Navbar> = {
	title: 'widgets/Navbar',
	component: Navbar,
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Primary: Story = {}

export const WithAuthData: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					username: 'test',
				},
			},
		}),
	],
}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}
