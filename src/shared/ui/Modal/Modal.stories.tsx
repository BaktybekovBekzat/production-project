import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sint, voluptatum dolore asperiores similique aspernatur maiores debitis cum fugiat quisquam.',
	},
}

export const Dark: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sint, voluptatum dolore asperiores similique aspernatur maiores debitis cum fugiat quisquam.',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
