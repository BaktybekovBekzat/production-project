import { Meta, StoryObj } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof LangSwitcher> = {
	title: 'widgets/LangSwitcher',
	component: LangSwitcher,
}

export default meta

type Story = StoryObj<typeof LangSwitcher>

export const Light: Story = {}

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}
