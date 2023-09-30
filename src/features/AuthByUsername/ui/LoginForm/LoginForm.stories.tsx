import { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof LoginForm> = {
	title: 'features/LoginForm',
	component: LoginForm,
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Light: Story = {}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}
