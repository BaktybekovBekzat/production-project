import { ReactNode, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface IProps extends LinkProps {
	className?: string
	children: ReactNode
	theme?: AppLinkTheme
}

export const AppLink = memo((props: IProps) => {
	const {
		className,
		children,
		to,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={classNames(styles.AppLink, {}, [
				className,
				styles[theme],
			])}
			{...otherProps}
		>
			{children}
		</Link>
	)
})
