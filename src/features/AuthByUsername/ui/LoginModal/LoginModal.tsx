import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

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
			className={classNames(styles.LoginModal, {}, [className])}
			lazy
		>
			<LoginForm />
		</Modal>
	)
}
