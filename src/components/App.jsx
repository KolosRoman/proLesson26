import React from 'react';

import {ContactsList} from './contacts-list/ContactsList.jsx';
import {FormInput} from './form-input/FormInput.jsx';

export class App extends React.Component {
    constructor() {
        super()

    }


    render() {
        return (
            <main>
                <h1 className='main-title'>Контакти</h1>
                <div className='main-header'>
                    <p className='main-header-item'>Ім'я</p>
                    <p className='main-header-item'>Прізвище</p>
                    <p className='main-header-item'>Телефон</p>
                    <p className='main-header-item'>Видалити</p>
                </div>
                <ContactsList />
                <FormInput />
            </main>
        )
    }
}