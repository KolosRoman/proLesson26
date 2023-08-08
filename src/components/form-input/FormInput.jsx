import React from "react";

export class FormInput extends React.Component {
    constructor() {
        super()
        
        this.state = {
            name: '',
            surname: '',
            phone: ''
        }
    }


    onNewUserDelete = (userDelete) => {
        userDelete.remove()
    }

    onAddNewUser = (e) => {
        e.preventDefault();
        let error = document.getElementById('error');
        if(this.state.name === '' || this.state.surname === '' || this.state.phone === '') {
            error.textContent = 'Всі поля мають бути заповнені';
            return;
        }
        let form = document.querySelector('.form-container')
        let block = document.getElementById('new-user');
        let newUserBlok = document.createElement('div');
        let userName = document.createElement('p');
        let userSurname = document.createElement('p');
        let userPhone = document.createElement('p');
        let newUserDelete = document.createElement('button');
        userName.innerText = this.state.name;
        userSurname.innerText = this.state.surname;
        userPhone.innerText = this.state.phone;
        newUserDelete.innerText = 'Видалити';
        newUserDelete.classList.add('main-button');
        newUserBlok.append(userName, userSurname, userPhone, newUserDelete);
        newUserBlok.classList.add('main-header')
        newUserDelete.onclick = () => this.onNewUserDelete(newUserBlok);
        block.append(newUserBlok);
        form.classList.remove('form-open');
        error.textContent = '';
        this.setState({
            name: '',
            surname: '',
            phone: ''
        })
    }

    onTodoChange = (e) => {
        this.setState({
            addTodo: e.target.value
        })
    }

    onFormInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onCloseForm = () => {
        let form = document.querySelector('.form-container');
        form.classList.remove('form-open')
    }


    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.onAddNewUser} className='form-block'>
                    <h2 className="form-block-title">Додати контакт</h2>
                    <p id="error" className="error-message"></p>
                    <div>
                        <label htmlFor="" className="form-label">Ім'я</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.onFormInputChange} className='form-input'/>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">Прізвище</label>
                        <input type="text" name="surname" value={this.state.surname} onChange={this.onFormInputChange} className='form-input'/>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">Телефон</label>
                        <input type="text" name="phone" value={this.state.phone} onChange={this.onFormInputChange} className='form-input'/>
                    </div>
                    <button className='form-button'>Зберегти</button>
                    <button className='form-button' onClick={() => this.onCloseForm()}>Скасувати</button>

            </form>
            </div>
        )
    }
}