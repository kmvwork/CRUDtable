import React from 'react';

import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className={'app-add-form'}>
            <h3>Add a new employee</h3>
            <form
                className={'add-form d-flex'}>
                <div className={'add-form-wrapper'}>
                    <input type="text"
                           className={'form-control new-post-label'}
                           placeholder="Employee's name?"/>
                    <input type="number"
                           className={'form-control new-post-label'}
                           placeholder="salary in dollars?"/>

                    <button type="submit"
                            className={'add-btn btn btn-outline-light'}>Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmployeesAddForm;