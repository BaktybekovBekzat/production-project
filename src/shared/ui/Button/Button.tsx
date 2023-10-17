import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children: ReactNode
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
}

export enum ButtonSize {
	L = 'size_l',
	M = 'size_m',
	XL = 'size_xl',
}

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export const Button: FC<IProps> = (props) => {
	const {
		className = '',
		children,
		theme,
		square = false,
		size = ButtonSize.M,
		disabled,
		...otherProps
	} = props

	const mods: Record<string, string | boolean> = {
		[styles.square]: square,
		[styles.disabled]: disabled,
	}

	return (
		<button
			className={classNames(styles.Button, mods, [
				className,
				styles[theme],
				styles[size],
			])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
