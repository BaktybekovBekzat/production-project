import {
	FC,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
	MouseEvent,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { Portal } from '../Portal/Portal'

interface IProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<IProps> = (props) => {
	const { className = '', children, isOpen, onClose } = props
	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const mods: Record<string, string | boolean> = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing,
	}

	const closeHandler = useCallback(
		() => () => {
			if (onClose) {
				setIsClosing(true)
				timerRef.current = setTimeout(() => {
					onClose()
					setIsClosing(false)
				}, ANIMATION_DELAY)
			}
		},
		[onClose]
	)

	const onContentClick = (e: MouseEvent) => {
		e.stopPropagation()
	}

	const onKeyDown = useCallback(
		() => (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler()
			}
		},
		[closeHandler]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keyDown', onKeyDown)
		}

		return () => {
			window.removeEventListener('keyDown', onKeyDown)
			clearTimeout(timerRef.current)
		}
	}, [isOpen, onKeyDown])

	return (
		<Portal>
			<div className={classNames(styles.Modal, mods, [className])}>
				<div className={styles.overlay} onClick={closeHandler}>
					<div className={styles.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
