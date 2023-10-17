import { FormEvent, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { AppDispatch } from 'app/providers/StoreProvider/index'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

interface IProps {
	className?: string
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
}

const LoginForm = memo((props: IProps) => {
	const { className = '' } = props
	const { t } = useTranslation()
	const dispatch = useDispatch<AppDispatch>()
	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch]
	)

	const onFormSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()

			dispatch(loginByUsername({ username, password }))
		},
		[dispatch, password, username]
	)

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
			<form
				className={classNames(styles.LoginForm, {}, [className])}
				onSubmit={onFormSubmit}
			>
				<Text title={t('Форма авторизации')} />
				{error && <Text text={error} theme={TextTheme.ERROR} />}
				<Input
					className={styles.input}
					placeholder={t('Логин')}
					autoFocus
					onChange={onChangeUsername}
					value={username}
				/>
				<Input
					className={styles.input}
					placeholder={t('Пароль')}
					onChange={onChangePassword}
					value={password}
				/>
				<Button
					className={styles.loginBtn}
					disabled={isLoading}
					type='submit'
				>
					{t('Войти')}
				</Button>
			</form>
		</DynamicModuleLoader>
	)
})

export default LoginForm
