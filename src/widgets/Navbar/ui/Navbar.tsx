import { FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginModal } from 'features/AuthByUsername'

interface IProps {
	className?: string
}

export const Navbar: FC<IProps> = (props) => {
	const { className = '' } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					onClick={onShowModal}
				>
					{t('Войти')}
				</Button>
			</div>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</div>
	)
}
