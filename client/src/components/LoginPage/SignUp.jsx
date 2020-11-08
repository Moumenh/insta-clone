import React from 'react'
import { Button, Input } from '@material-ui/core';
import { Route } from 'react-router-dom'

import './Login.css'


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
        console.log(value)
    }


    postReq = (obj) => {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:5000/signup', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    handleClick = (e) => {
        // e.preventDefault()
        this.postReq(this.state)
        this.props.signedUp()
    }




    render() {
        const { name, email, password } = this.state
        return (

            <div className='login'>
                <img className='loging__logo' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                    alt='logo' />
                <div className='loging__input'>
                    <Input className='login_in'
                        placeholder='username ..'
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                    />
                    <br />
                    <Input className='login_in'
                        placeholder='email ..'
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                    />
                    <br />
                    <Input className='login_in'
                        placeholder='password ..'
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                    />

                    <Button type='submit' className='login_button' onClick={this.handleClick}> Sign Up </Button>
                </div>
            </div>
        )
    }
}


export default SignUp