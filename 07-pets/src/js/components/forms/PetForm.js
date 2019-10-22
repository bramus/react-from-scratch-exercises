import React from 'react';

import { ICONS } from './../../enums';

const PetForm = () => {
    // @TODO: Define your state here

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // @TODO: Call `setPets` to (immutably) adjust the `pets` State object
    }
	
	return (
		<div className="c-petform">
			<h2>Add pet</h2>
			<form onSubmit={handleSubmit}>
				<dl>
					<dt><label htmlFor="name">Name</label></dt>
					<dd><input type="text" autoComplete="off" name="name" id="name" /></dd>
					<dt><label htmlFor="type">Type</label></dt>
					<dd>
						<select name="type" id="type">
							<option value="">Choose …</option>
							{
								Object.entries(ICONS)
									.map(([type, emoji]) => 
										<option value={type} key={type}>{emoji} {type}</option>
									)
							}
						</select>
					</dd>
				</dl>
				<input type="submit" value="Add" />
			</form>
		</div>
	);
};

export default PetForm;