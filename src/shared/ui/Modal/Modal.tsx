import {
	FC,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
	MouseEvent,
	MutableRefObject,
} from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { Portal } from '../Portal/Portal'

interface IProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
}

const ANIMATION_DELAY = 100

export const Modal: FC<IProps> = (props) => {
	const { className, children, isOpen, onClose, lazy } = props
	const [isMounted, setIsMounted] = useState(false)
	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

	const mods: Mods = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing,
	}

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onContentClick = (e: MouseEvent) => {
		e.stopPropagation()
	}

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler()
			}
		},
		[closeHandler]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}

		return () => {
			window.removeEventListener('keydown', onKeyDown)
			clearTimeout(timerRef.current)
		}
	}, [isOpen, onKeyDown])

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	if (lazy && !isMounted) return null

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
