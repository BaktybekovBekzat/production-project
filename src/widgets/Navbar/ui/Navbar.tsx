import { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface IProps {
	className?: string
}

export const Navbar = memo((props: IProps) => {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)
	const dispatch = useDispatch()
	const authData = useSelector(getUserAuthData)

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	if (authData) {
		return (
			<div className={classNames(styles.Navbar, {}, [className])}>
				<div className={styles.links}>
					<Button
						theme={ButtonTheme.CLEAR_INVERTED}
						onClick={onLogout}
					>
						{t('Выйти')}
					</Button>
				</div>
			</div>
		)
	}

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
})
