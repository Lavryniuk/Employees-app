import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, like, onSalaryChange} = props;
    let classNames = `list-group-item ${increase ? 'increase' : ''} ${like ? 'like' : ''} d-flex justify-content-between `;

    return (
        <li className={classNames}>
            <span 
                className='list-group-item-label' 
                onClick={onToggleProp}
                data-toggle='like'>{name}</span>
            <input type="text" 
                   className="list-group-item-input" 
                   defaultValue={salary ? salary + '$' : ''} 
                   onInput={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, '');
                    onSalaryChange(numericValue);
                }} 
                onKeyDown={(e) => {
                    if (e.key.match(/[^0-9]/) 
                        && e.key !== 'Backspace' 
                        && e.key !== 'Delete' 
                        && e.key !== 'ArrowLeft' 
                        && e.key !== 'ArrowRight') {
                            e.preventDefault();
                    }
                }}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type='button'
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;