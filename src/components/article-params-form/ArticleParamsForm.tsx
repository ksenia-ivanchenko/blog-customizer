import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select/Select';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator/Separator';
import { RadioGroup } from '../radio-group/RadioGroup';

export const ArticleParamsForm = () => {
	const [visible, setVisible] = useState(false);
	const [params, setParams] = useState(defaultArticleState);

	// const handleParamSelect = (
	// 	param: Partial<keyof ArticleStateType>,
	// 	value: OptionType
	// ) => {
	// 	setParams({
	// 		...params,
	// 		param: value
	// 	})
	// };

	// const handleFontSizeSelect = (value: OptionType) => {
	// 	setParams({
	// 		...params,
	// 		fontSizeOption: value,
	// 	});
	// };

	// const handleFontFamilySelect = (value: OptionType) => {
	// 	setParams({
	// 		...params,
	// 		fontFamilyOption: value,
	// 	});
	// };

	const changeFormVisibility = () => {
		setVisible(!visible);
	};

	return (
		<>
			<ArrowButton
				onClick={changeFormVisibility}
				isComponentVisible={visible}
			/>
			<aside
				className={clsx(
					styles.container,
					visible ? styles.container_open : null
				)}>
				<form className={styles.form}>
					<Select
						title='шрифт'
						selected={params.fontFamilyOption}
						options={fontFamilyOptions}
						// onChange={handleFontFamilySelect}
					/>
					<RadioGroup
						selected={params.fontSizeOption}
						options={fontSizeOptions}
						name='размер шрифта'
						title='размер шрифта'
						// onChange={handleFontSizeSelect}
					/>
					<Select
						title='цвет шрифта'
						selected={params.fontColor}
						options={fontColors}
					/>
					<Separator></Separator>
					<Select
						title='цвет фона'
						selected={params.backgroundColor}
						options={backgroundColors}
					/>
					<Select
						title='ширина контента'
						selected={params.contentWidth}
						options={contentWidthArr}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
