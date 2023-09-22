import { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof AboutPage> = {
	title: 'pages/AboutPage',
	component: AboutPage,
}

export default meta

type Story = StoryObj<typeof AboutPage>

export const Light: Story = {}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}
