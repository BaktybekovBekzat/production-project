import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import { Spinner } from 'shared/ui/Spinner/Spinner'

interface IProps {
	className?: string
}

export const PageLoader: FC<IProps> = (props) => {
	const { className = '' } = props

	return (
		<div className={classNames(styles.PageLoader, {}, [className])}>
			<Spinner />
		</div>
	)
}
