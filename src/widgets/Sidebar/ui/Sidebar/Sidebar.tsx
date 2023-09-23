import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import HomeIcon from 'shared/assets/icons/home-icon.svg'
import AboutIcon from 'shared/assets/icons/about-icon.svg'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routerConfig/routeConfig'

interface IProps {
	className?: string
}

export const Sidebar: FC<IProps> = (props) => {
	const { className = '' } = props
	const [collapsed, setCollapsed] = useState(false)
	const { t } = useTranslation()

	const onToggle = () => setCollapsed((prev) => !prev)

	return (
		<div
			className={classNames(
				styles.Sidebar,
				{
					[styles.collapsed]: collapsed,
				},
				[className]
			)}
			data-testid='sidebar'
		>
			<div className={styles.links}>
				<AppLink
					className={styles.linksItem}
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
				>
					<HomeIcon />
					<span>{t('Главная')}</span>
				</AppLink>
				<AppLink
					className={styles.linksItem}
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
				>
					<AboutIcon />
					<span>{t('О сайте')}</span>
				</AppLink>
			</div>
			<Button
				className={styles.collapseBtn}
				onClick={onToggle}
				data-testid='sidebar-toggle'
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</div>
	)
}
