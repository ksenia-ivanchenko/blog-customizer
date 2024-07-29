import { useState, CSSProperties } from 'react';
import {
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import styles from './app.module.scss';

export const App = () => {
	const [state, setState] = useState(defaultArticleState);

	const changeArticleState = (formParams: ArticleStateType) => {
		setState(formParams);
	};

	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': state.fontFamilyOption.value,
					'--font-size': state.fontSizeOption.value,
					'--font-color': state.fontColor.value,
					'--container-width': state.contentWidth.value,
					'--bg-color': state.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				title='задайте параметры'
				changeArticleState={changeArticleState}
			/>
			<Article />
		</div>
	);
};
