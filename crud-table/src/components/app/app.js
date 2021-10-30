import React from 'react';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

const App = () => {
    const data = [
        {name: 'Nick R.', salary: '6000', increase: true},
        {name: 'Mike P.', salary: '900', increase: false},
        {name: 'Max K.', salary: '4500', increase: true},
    ]

    return (
        <div className={'app'}>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
};

export default App;