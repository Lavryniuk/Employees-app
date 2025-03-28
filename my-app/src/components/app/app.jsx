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
                {name: 'John Smith',salary: 1200, increase: true, like:false, id: uuidv4()},
                {name: 'Alex Shepard', salary: 1500, increase: false, like:false, id: uuidv4()},
                {name: 'Sarah Jones', salary: 2000, increase: false, like:false, id: uuidv4()}
            ]
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

    render() {

        const totalEmployees = this.state.data.length;
        const totalIncrease = this.state.data.filter(emp => emp.increase).length;

        return (
            <div className="app">
                <AppInfo 
                totalEmployees={totalEmployees}
                totalIncrease={totalIncrease}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
    
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
};

export default App;