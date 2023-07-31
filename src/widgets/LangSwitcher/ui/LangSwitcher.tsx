import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LangSwitcher.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface IProps {
	className?: string
}

export const LangSwitcher: FC<IProps> = (props) => {
	const { className = '' } = props
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<div className={classNames(styles.LangSwitcher, {}, [className])}>
			<Button onClick={toggle}>{t('Язык')}</Button>
		</div>
	)
}
