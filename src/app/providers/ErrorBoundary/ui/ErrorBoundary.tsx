import { Component, ErrorInfo, ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface IErrorBoundaryProps {
	children: ReactNode
}

interface IErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	constructor(props: IErrorBoundaryProps) {
		super(props)
		this.state = {
			hasError: false,
		}
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log(error, errorInfo)
	}

	render(): ReactNode {
		const { hasError } = this.state
		const { children } = this.props

		if (hasError) {
			return (
				<Suspense fallback={''}>
					<PageError />
				</Suspense>
			)
		}

		return children
	}
}

export default ErrorBoundary
