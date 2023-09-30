import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface IProps {
	className?: string
}

export const LoginForm: FC<IProps> = (props) => {
	const { className = '' } = props
	const { t } = useTranslation()

	return (
		<form className={classNames(styles.LoginForm, {}, [className])}>
			<Input className={styles.input} placeholder={t('Логин')} autoFocus />
			<Input className={styles.input} placeholder={t('Пароль')} />
			<Button className={styles.loginBtn}>{t('Войти')}</Button>
		</form>
	)
}
