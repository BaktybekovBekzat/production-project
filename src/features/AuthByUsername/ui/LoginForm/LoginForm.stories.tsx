import { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/decorators/StoreDecorator'

const meta: Meta<typeof LoginForm> = {
	title: 'features/LoginForm',
	component: LoginForm,
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {}

export const WithError: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				error: 'Неверный логин или пароль',
			},
		}),
	],
}

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				isLoading: true,
			},
		}),
	],
}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}
