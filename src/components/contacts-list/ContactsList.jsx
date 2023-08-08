import React from 'react';

export class ContactsList extends React.Component {
    constructor() {
        super()

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                list: json
            })
        });
    }

    onPostDelete(listId) {
        this.setState({
            list: this.state.list.filter(el => el.id !== listId)
        })
    }

    onFormOpen = () => {
        let form = document.querySelector('.form-container')
        form.classList.add('form-open')
    }

    render() {
        return (
            <>
                <div id='new-user'>
                    {this.state.list.map(el => (
                            <div key={el.id}  className='main-header'>
                                <p>{el.name.split(' ')[0]}</p>
                                <p>{el.name.split(' ')[1]}</p>
                                <p>{el.phone}</p>
                                <button onClick={() => this.onPostDelete(el.id)} className='main-button'>Видалити</button>   
                            </div>
                        ))
                    }
                </div>
                <div>
                    <button onClick={() => this.onFormOpen()} className='add-button'>Додати контакт</button>
                </div>
            </>
        )
    }
}