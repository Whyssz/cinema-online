import { FC } from 'react';
import ReactSelect, { MultiValue, SingleValue } from 'react-select';
import makeAnimated from 'react-select/animated';

import formStyles from '../form.module.scss';

import styles from './Select.module.scss';
import { IOption, ISelect } from './select-interface';

const animatedComponent = makeAnimated();

const Select: FC<ISelect> = ({
	options,
	field,
	isMulti,
	isLoading,
	error,
	placeholder,
}) => {
	const onChange = (
		newValue: MultiValue<string | IOption> | SingleValue<string | IOption>
	) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((item: IOption) => item.value)
				: (newValue as IOption).value
		);
	};

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value);
		} else {
			return isMulti ? [] : ('' as any);
		}
	};

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					placeholder={placeholder || ''}
					options={options}
					value={getValue()}
					isMulti={isMulti}
					onChange={onChange}
					isLoading={isLoading}
					components={animatedComponent}
				/>
			</label>
			{error && <div className={formStyles.error}>{error.message}</div>}
		</div>
	);
};

export default Select;
