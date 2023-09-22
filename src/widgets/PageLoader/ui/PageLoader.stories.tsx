import { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof PageLoader> = {
	title: 'widgets/PageLoader',
	component: PageLoader,
}

export default meta

type Story = StoryObj<typeof PageLoader>

export const Light: Story = {}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}
