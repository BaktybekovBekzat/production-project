import { FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'

interface IProps {
	className?: string
}

export const Navbar: FC<IProps> = (props) => {
	const { className = '' } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const toggleAuthModal = useCallback(() => {
		setIsAuthModal((v) => !v)
	}, [])

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					onClick={toggleAuthModal}
				>
					{t('Войти')}
				</Button>
			</div>
			<Modal isOpen={isAuthModal} onClose={toggleAuthModal}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
				eligendi excepturi repellendus ducimus labore cumque? Cumque
				necessitatibus esse numquam error?
			</Modal>
		</div>
	)
}
