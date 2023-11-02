import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

export interface IUseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export function useTheme(): IUseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
		setTheme?.(newTheme)
	}

	return {
		theme: theme || Theme.LIGHT,
		toggleTheme,
	}
}
