import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ({
	onClick,
	isComponentVisible,
}: {
	onClick?: OnClick;
	isComponentVisible?: boolean;
}) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			className={clsx(
				styles.container,
				isComponentVisible ? styles.container_open : null
			)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(
					styles.arrow,
					isComponentVisible ? styles.arrow_open : null
				)}
			/>
		</div>
	);
};
