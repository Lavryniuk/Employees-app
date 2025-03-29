import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({visibleData, onDelete, onToggleProp, filteredData, onSalaryChange}) => {
    const finalData = filteredData(visibleData);
    const elements = finalData.map(item => {

        const {id, ...itemProps} = item;

        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            onSalaryChange={(newSalary) => onSalaryChange(id, newSalary)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmployeesList;