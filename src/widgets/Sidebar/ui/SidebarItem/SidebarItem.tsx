import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ISidebarItem } from 'widgets/Sidebar/model/items'
import { useTranslation } from 'react-i18next'

interface IProps {
	className?: string
	item?: ISidebarItem
	collapsed?: boolean
}

export const SidebarItem = memo((props: IProps) => {
	const { t } = useTranslation()
	const { className = '', item, collapsed } = props

	return (
		<AppLink
			className={classNames(
				styles.Link,
				{
					[styles.collapsed]: collapsed,
				},
				[className]
			)}
			theme={AppLinkTheme.SECONDARY}
			to={item.path}
		>
			{<item.Icon className={styles.icon} />}
			<span>{t(item.text)}</span>
		</AppLink>
	)
})
