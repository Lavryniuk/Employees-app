import { Component } from 'react';
import { v4 as uuidv4} from 'uuid';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Smith',salary: 800, increase: true, like:false, id: uuidv4()},
                {name: 'Alex Shepard', salary: 1500, increase: false, like:false, id: uuidv4()},
                {name: 'Sarah Jones', salary: 2000, increase: false, like:false, id: uuidv4()}
            ],
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        if (!name || !salary) return;
        
        const newEmployee = {
            name,
            salary,
            increase: false,
            like: false,
            id: uuidv4()
        }
        this.setState(({data}) => ({
            data: [...data, newEmployee]
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    setFilter = (filter) => {
        this.setState({filter});
    }

    filterData = (data) => {
        const {filter} = this.state;
        if (filter === 'promotion') return data.filter(emp => emp.increase);
        if (filter === 'salary1000+') return data.filter(emp => emp.salary > 1000);

        return data;
    }


    render() {
        const {data, term, filter} = this.state;
        const totalEmployees = this.state.data.length;
        const totalIncrease = this.state.data.filter(emp => emp.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo 
                totalEmployees={totalEmployees}
                totalIncrease={totalIncrease}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} setFilter={this.setFilter}/>
                </div>
    
                <EmployeesList
                visibleData={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                filteredData={this.filterData}/>
    
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
};

export default App;