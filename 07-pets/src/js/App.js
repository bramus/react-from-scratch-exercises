import React, { useState } from 'react';

import Owner from './components/Owner';
import Pets from './components/Pets';

const App = ({ ownerName = '?', petsList = {}}) => {
	const [pets, setPets] = useState(petsList);
	
	return (
		<div className="c-app">
			<Owner name={ownerName} numPets={Object.keys(pets).length} />
			<Pets pets={pets} />
		</div>
	);
};

export default App;
