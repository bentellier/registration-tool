import React from 'react';
import PropTypes from 'prop-types';

const CheckboxOrRadioGroup = (props) => (
	<div>
		{/*<label className="form-label">{props.title}</label>*/}
		<div className="checkbox-group">
			{props.options.map(option => {
				return (
					<label key={option} className=" capitalize">
						<input
							className="form-checkbox"
							name={props.setName}
							type={props.type} 
							onChange={props.controlFunc}
							value={option}
							checked={props.selectedOptions.indexOf(option) > -1}
							required="true" /> {option}
					</label>
				);
			})}
		</div>
	</div>
);

CheckboxOrRadioGroup.propTypes = {
	// title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	setName: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedOptions: PropTypes.array,
	controlFunc: PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;