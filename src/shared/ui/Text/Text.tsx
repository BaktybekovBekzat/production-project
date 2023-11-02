import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

interface IProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
}

export const Text = memo((props: IProps) => {
	const { className = '', text, title, theme = TextTheme.PRIMARY } = props

	return (
		<div
			className={classNames(styles.Text, {}, [className, styles[theme]])}
		>
			{title && <p className={styles.title}>{title}</p>}
			{text && <p className={styles.text}>{text}</p>}
		</div>
	)
})
