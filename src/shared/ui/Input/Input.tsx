import {
	ChangeEvent,
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface IProps extends HTMLInputProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
}

export const Input = memo((props: IProps) => {
	const {
		className = '',
		value,
		onChange,
		type,
		placeholder,
		autoFocus,
		...otherProps
	} = props
	const ref = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	useEffect(() => {
		if (autoFocus) {
			setIsFocused(true)
			ref.current.focus()
		}
	}, [autoFocus])

	return (
		<div className={classNames(styles.InputWrapper, {}, [className])}>
			{placeholder && (
				<div className={styles.placeholder}>{`${placeholder}>`}</div>
			)}
			<input
				ref={ref}
				className={styles.input}
				type={type}
				value={value}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</div>
	)
})
