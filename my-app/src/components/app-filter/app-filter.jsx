import './app-filter.css';



const AppFilter = ({filter, setFilter}) => {
	const buttonsData = [
		{name: 'all', label: 'All employees'},
		{name: 'promotion', label: 'For Promotion'},
		{name: 'salary1000+', label: 'Salary Over $1000'}
	];

	const buttons = buttonsData.map(({name, label}) => {
		const active = filter === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light';

		return (
			<button 
				className={`btn ${clazz}`}
				type='button'
				key={name}
				onClick={() => setFilter(name)}>
					{label}
			</button>
		)
	})

	return (
		<div className="btn-group">
			{buttons}
		</div>
	)
}

export default AppFilter;