import { Meta, StoryObj } from '@storybook/react'
import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
}

export default meta

type Story = StoryObj<typeof Text>

export const Primary: Story = {
	args: {
		title: 'Title Lorem Ipsum',
		text: 'Description Description Description ',
	},
}

export const Error: Story = {
	args: {
		title: 'Title Lorem Ipsum',
		text: 'Description Description Description ',
		theme: TextTheme.ERROR,
	},
}

export const OnlyTitle: Story = {
	args: {
		title: 'Title Lorem Ipsum',
	},
}

export const OnlyText: Story = {
	args: {
		text: 'Description Description Description ',
	},
}

export const PrimaryDark: Story = {
	args: {
		title: 'Title Lorem Ipsum',
		text: 'Description Description Description ',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const ErrorDark: Story = {
	args: {
		title: 'Title Lorem Ipsum',
		text: 'Description Description Description ',
		theme: TextTheme.ERROR,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const OnlyTitleDark: Story = {
	args: {
		title: 'Title Lorem Ipsum',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const OnlyTextDark: Story = {
	args: {
		text: 'Description Description Description ',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
