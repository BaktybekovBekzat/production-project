import { FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Spinner } from 'shared/ui/Spinner/Spinner'

interface IProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<IProps> = (props) => {
	const { className = '', isOpen, onClose } = props

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			className={classNames('', {}, [className])}
			lazy
		>
			<Suspense fallback={<Spinner />}>
				<LoginFormAsync />
			</Suspense>
		</Modal>
	)
}
