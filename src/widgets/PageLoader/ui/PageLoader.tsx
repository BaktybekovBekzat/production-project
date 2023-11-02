import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import { Spinner } from 'shared/ui/Spinner/Spinner'

interface IProps {
	className?: string
}

export const PageLoader = memo((props: IProps) => {
	const { className } = props

	return (
		<div className={classNames(styles.PageLoader, {}, [className])}>
			<Spinner />
		</div>
	)
})
