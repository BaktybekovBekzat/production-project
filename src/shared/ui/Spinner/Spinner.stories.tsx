import { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Spinner> = {
	title: 'shared/Spinner',
	component: Spinner,
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Light: Story = {}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}
