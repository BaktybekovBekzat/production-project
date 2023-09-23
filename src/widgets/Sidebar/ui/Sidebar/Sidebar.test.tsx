import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderComponent } from 'shared/lib/tests/componentRender'

describe('Sidebar component tests', () => {
	test('Render test', () => {
		renderComponent(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})

	test('Test toggle', () => {
		renderComponent(<Sidebar />)
		const toggleBtn = screen.getByTestId('sidebar-toggle')
		const sidebar = screen.getByTestId('sidebar')
		expect(sidebar).toBeInTheDocument()
		fireEvent.click(toggleBtn)
		expect(sidebar).toHaveClass('collapsed')
	})
})
