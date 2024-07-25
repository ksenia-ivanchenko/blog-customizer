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

	const handleParamSelect = (
		param: Partial<keyof ArticleStateType>,
		value: OptionType
	) => {
		setParams({
			...params,
			[param]: value,
		});
	};

	const changeFormVisibility = () => {
		setVisible(!visible);
	};

	const resetParams = () => {
		setParams(defaultArticleState);
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
						selectType='fontFamilyOption'
						onChange={handleParamSelect}
					/>
					<RadioGroup
						selected={params.fontSizeOption}
						options={fontSizeOptions}
						name='размер шрифта'
						title='размер шрифта'
						selectType='fontSizeOption'
						onChange={handleParamSelect}
					/>
					<Select
						title='цвет шрифта'
						selected={params.fontColor}
						options={fontColors}
						selectType='fontColor'
						onChange={handleParamSelect}
					/>
					<Separator></Separator>
					<Select
						title='цвет фона'
						selected={params.backgroundColor}
						options={backgroundColors}
						selectType='backgroundColor'
						onChange={handleParamSelect}
					/>
					<Select
						title='ширина контента'
						selected={params.contentWidth}
						options={contentWidthArr}
						selectType='contentWidth'
						onChange={handleParamSelect}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetParams} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
