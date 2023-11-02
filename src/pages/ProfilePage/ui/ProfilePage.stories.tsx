import { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof ProfilePage> = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}
