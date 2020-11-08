import React from 'react'
import { Button, Input } from '@material-ui/core';

import './Login.css'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password : ''
        }
    }

    
      handleChange = (e) => {
        const { name, value } = e.target
    
        this.setState({ [name]: value })
        console.log(value)
      }

      handleSignin = (e) => {
        e.preventDefault()
        this.props.postReqSignIn(this.state)
      }
    
    
      


    render() {
        const { name , password } = this.state
        
        return (
            <div className='login'>
                <img className='loging__logo' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                    alt='logo' />
                <div className='loging__input'>
                    <Input className='login_in'
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        />
                    <br />
                    <Input className='login_in'
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        />
                    <Button type='submit' className='login_button' onClick={this.handleSignin}> Sign In </Button>
                    <Button type='submit' className='login_button'> Sign Up </Button>
                </div>



            </div>
        )
    }
}

export default Login