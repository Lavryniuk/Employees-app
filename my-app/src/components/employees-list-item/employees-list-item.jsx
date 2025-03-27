import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    giveBonus = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    likeUser = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {name, surname, salary, onDelete} = this.props;
        const {increase, like} = this.state;
        let classNames = `list-group-item ${increase ? 'increase' : ''} ${like ? 'like' : ''} d-flex justify-content-between `;

        return (
            <li className={classNames}>
                <span className='list-group-item-label' onClick={this.likeUser}>{name} {surname}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.giveBonus}>
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
}

export default EmployeesListItem;