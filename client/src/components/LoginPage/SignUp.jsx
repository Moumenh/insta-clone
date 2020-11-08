import React from 'react'
import { Button, Input } from '@material-ui/core';

import './Login.css'


class SignUp extends React.Component {
    constructor() {
        super()
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




    render() {
        return (

            <div className='login'>
                <img className='loging__logo' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                    alt='logo' />
                <div className='loging__input'>
                    <Input className='login_in' />
                    <br />
                    <Input className='login_in' />
                    <br />
                    <Input className='login_in' />

                    <Button type='submit' className='login_button'> Sign Up </Button>
                </div>
            </div>
        )
    }
}


export default SignUp