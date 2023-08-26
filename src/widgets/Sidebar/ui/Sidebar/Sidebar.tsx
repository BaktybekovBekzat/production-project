import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface IProps {
	className?: string
}

export const Sidebar: FC<IProps> = (props) => {
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
			<Button onClick={onToggle} data-testid='sidebar-toggle'>
				Toggle
			</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	)
}
