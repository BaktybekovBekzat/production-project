import { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { sidebarItemList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface IProps {
	className?: string
}

export const Sidebar = memo((props: IProps) => {
	const { className = '' } = props
	const [collapsed, setCollapsed] = useState(false)

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
				{sidebarItemList.map((item) => (
					<SidebarItem
						item={item}
						key={item.path}
						collapsed={collapsed}
					/>
				))}
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
})
