import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations'

describe('Sidebar component tests', () => {
	test('Render test', () => {
		renderWithTranslations(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})

	test('Test toggle', () => {
		renderWithTranslations(<Sidebar />)
		const toggleBtn = screen.getByTestId('sidebar-toggle')
		const sidebar = screen.getByTestId('sidebar')
		expect(sidebar).toBeInTheDocument()
		fireEvent.click(toggleBtn)
		expect(sidebar).toHaveClass('collapsed')
	})
})
