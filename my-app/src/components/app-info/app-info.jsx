import './app-info.css';

const AppInfo = ({totalEmployees, totalIncrease}) => {
    return (
        <div className="app-info">
            <h1>Employee Management at Company N</h1>
            <h2>Total number of employees: {totalEmployees}</h2>
            <h2>Will receive a bonus: {totalIncrease}</h2>
        </div>
    )
}

export default AppInfo;