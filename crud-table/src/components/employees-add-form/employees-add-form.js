import React, {Component} from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state
        return (
            <div className={'app-add-form'}>
                <h3>Add a new employee</h3>
                <form
                    className={'add-form d-flex'}
                    onSubmit={this.onSubmit}
                >
                    <div className={'add-form-wrapper'}>
                        <input type="text"
                               className={'form-control new-post-label'}
                               placeholder="Employee's name?"
                               value={name}
                               name={'name'}
                               onChange={this.onValueChange}
                        />
                        <input type="number"
                               className={'form-control new-post-label'}
                               placeholder="salary in dollars?"
                               value={salary}
                               name={'salary'}
                               onChange={this.onValueChange}
                        />

                        <button type="submit"
                                className={'add-btn btn btn-outline-light'}>Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default EmployeesAddForm;