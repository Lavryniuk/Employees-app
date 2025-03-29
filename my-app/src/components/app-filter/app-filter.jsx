import './app-filter.css';



const AppFilter = ({filter, setFilter}) => {
	return (
		<div className="btn-group">
			<button 
				className={`btn ${filter === 'all' ? 'btn-light' : 'btn-outline-light'}`}
				type='button'
				onClick={() => setFilter('all')}>
					All employees
			</button>
			<button 
				className={`btn ${filter === 'promotion' ? 'btn-light' : 'btn-outline-light'}`}
				type='button'
				onClick={() => setFilter('promotion')}>
					For Promotion
			</button>
			<button 
				className={`btn ${filter === 'salary1000+' ? 'btn-light' : 'btn-outline-light'}`}
				type='button'
				onClick={() => setFilter('salary1000+')}>
					Salary Over $1000
			</button>
		</div>
	)
}

export default AppFilter;