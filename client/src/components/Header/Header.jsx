import React from 'react'
import './Header.css'
import { Button } from '@material-ui/core';

const Header = () => {
    return (
        <div className='app__header'>
            <img className='app_headerImage'
                src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt='logo' />

            <div className='app__auth'>

                <Button>Sign In</Button>
            </div>
        </div>
    )
}

export default Header