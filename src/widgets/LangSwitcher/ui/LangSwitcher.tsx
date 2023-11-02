import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface IProps {
	className?: string
	short?: boolean
}

export const LangSwitcher = memo((props: IProps) => {
	const { className, short } = props
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<div className={classNames('', {}, [className])}>
			<Button onClick={toggle} theme={ButtonTheme.CLEAR}>
				{short ? t('Короткий язык') : t('Язык')}
			</Button>
		</div>
	)
})
