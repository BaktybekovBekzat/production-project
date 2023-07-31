import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button } from 'shared/ui/Button/Button'

interface IProps {
	className?: string
}

export const ThemeSwitcher: FC<IProps> = (props) => {
	const { className = '' } = props
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			className={classNames(styles.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	)
}
