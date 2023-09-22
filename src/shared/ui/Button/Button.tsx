import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children: ReactNode
	theme?: ButtonTheme
}

export enum ButtonTheme {
	CLEAR = 'clear',
    OUTLINE = 'outline'
}

export const Button: FC<IProps> = (props) => {
	const { className = '', children, theme, ...otherProps } = props

	return (
		<button
			className={classNames(styles.Button, {}, [
				className,
				styles[theme],
			])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
