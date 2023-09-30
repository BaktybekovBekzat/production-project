import { FC, ReactNode, useMemo, useState } from 'react'
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../lib/ThemeContext'

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface IProps {
	children: ReactNode
	initialTheme?: Theme
}

export const ThemeProvider: FC<IProps> = (props) => {
	const [theme, setTheme] = useState<Theme>(
		props.initialTheme ? props.initialTheme : defaultTheme
	)

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	)

	document.body.className = theme

	return (
		<ThemeContext.Provider value={defaultProps}>
			{props.children}
		</ThemeContext.Provider>
	)
}
