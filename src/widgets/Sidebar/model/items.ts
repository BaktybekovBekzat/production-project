import React from 'react'
import { RoutePath } from 'shared/config/routerConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home-icon.svg'
import AboutIcon from 'shared/assets/icons/about-icon.svg'
import ProfileIcon from 'shared/assets/icons/profile-icon.svg'

export interface ISidebarItem {
	path: string
	text: string
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sidebarItemList: ISidebarItem[] = [
	{
		path: RoutePath.main,
		text: 'Главная',
		Icon: HomeIcon,
	},
	{
		path: RoutePath.about,
		text: 'О нас',
		Icon: AboutIcon,
	},
	{
		path: RoutePath.profile,
		text: 'Профиль',
		Icon: ProfileIcon,
	},
]
