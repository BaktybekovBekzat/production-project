import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface IProps {
	className?: string
}

export const ProfileCard = memo((props: IProps) => {
	const { className } = props
	const { t } = useTranslation('profile')
	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileLoading)
	const error = useSelector(getProfileError)

	return (
		<div className={classNames(styles.ProfileCard, {}, [className])}>
			<div className={styles.header}>
				<Text title={t('Профиль')} />
				<Button theme={ButtonTheme.OUTLINE}>
					{t('Редактировать')}
				</Button>
			</div>
			<div className={styles.data}>
				<Input
					className={styles.input}
					value={data?.firstname}
					placeholder={t('Ваше имя')}
				/>
				<Input
					className={styles.input}
					value={data?.lastname}
					placeholder={t('Ваше фамилия')}
				/>
			</div>
		</div>
	)
})
