import React from 'react'
import { Button, Input } from '@material-ui/core';
import SignUp from './SignUp'

import './Login.css'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            signedUp: true
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

    signedUp = (e) => {
        // e.preventDefault()
        this.setState({ signedUp : !this.state.signedUp })
    }



    render() {
        const { name, password,signedUp } = this.state

        return (
            
            <div>
                {
                    signedUp ? 
                    <div className='login'>
                        <img className='loging__logo' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                    alt='logo' />
                <div className='loging__input'>
                    <Input className='login_in'
                        placeholder="Username .."
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                    />
                    <br />
                    <Input className='login_in'
                        placeholder="Password .."
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                    />
                    <Button type='submit' className='login_button' onClick={this.handleSignin}> Sign In </Button>
                    <Button type='submit' className='login_button' onClick={this.signedUp}> Sign Up </Button>
                </div>
                    </div> : <SignUp signedUp={this.signedUp} />
                }
                
            </div>
        )
    }
}

export default Login