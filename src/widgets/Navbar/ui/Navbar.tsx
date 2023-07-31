import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface IProps {
	className?: string
}

export const Navbar: FC<IProps> = (props) => {
	const { className = '' } = props

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
					Main
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
					About
				</AppLink>
			</div>
		</div>
	)
}
