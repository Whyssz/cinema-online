import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import { SlideItem } from './SlideItem';
import styles from './Slider.module.scss';
import { SlideArrow } from './SliderArrow';
import { ISlider } from './slider-interface';
import { useSlider } from './useSlider';

export const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	);

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				timeout={300}
				classNames="slide-animation"
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isPrev && (
				<SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
			)}
			{isNext && (
				<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	);
};
