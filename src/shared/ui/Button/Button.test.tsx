import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button component tests', () => {
	test('Render test', () => {
		render(<Button>Test</Button>)
		expect(screen.getByText('Test')).toBeInTheDocument()
	})

	test('Clear theme', () => {
		render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
		expect(screen.getByText('Test')).toHaveClass('clear')
	})
})
