import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		children: 'Primary',
	},
}

export const Clear: Story = {
	args: {
		theme: ButtonTheme.CLEAR,
		children: 'Clear',
	},
}

export const Outline: Story = {
	args: {
		theme: ButtonTheme.OUTLINE,
		children: 'OUTLINE',
	},
}

export const OutlineL: Story = {
	args: {
		theme: ButtonTheme.OUTLINE,
		children: 'OUTLINE',
		size: ButtonSize.L,
	},
}

export const OutlineM: Story = {
	args: {
		theme: ButtonTheme.OUTLINE,
		children: 'OUTLINE',
		size: ButtonSize.M,
	},
}

export const OutlineXL: Story = {
	args: {
		theme: ButtonTheme.OUTLINE,
		children: 'OUTLINE',
		size: ButtonSize.XL,
	},
}

export const Background: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND,
		children: 'Background',
	},
}

export const BackgroundInverted: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: 'BackgroundInverted',
	},
}

export const Square: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: '>',
		square: true,
	},
}

export const SquareL: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: '>',
		square: true,
		size: ButtonSize.L,
	},
}

export const SquareM: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: '>',
		square: true,
		size: ButtonSize.M,
	},
}

export const SquareXL: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: '>',
		square: true,
		size: ButtonSize.XL,
	},
}

export const PrimaryDark: Story = {
	args: {
		children: 'Primary',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearDark: Story = {
	args: {
		theme: ButtonTheme.CLEAR,
		children: 'Clear',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDark: Story = {
	args: {
		theme: ButtonTheme.OUTLINE,
		children: 'OUTLINE',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundDark: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND,
		children: 'Background',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundInvertedDark: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: 'BackgroundInverted',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareDark: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: '>',
		square: true,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareLDark: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: '>',
		square: true,
		size: ButtonSize.L,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareMDark: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: '>',
		square: true,
		size: ButtonSize.M,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareXLDark: Story = {
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
		children: '>',
		square: true,
		size: ButtonSize.XL,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
