import { FC, Suspense } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './thene/useTheme'
import { classNames } from './helpers/classNames/classNames'

interface IProps {}

export const App: FC<IProps> = (props) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/about' element={<AboutPageAsync />} />
					<Route path='/' element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}
