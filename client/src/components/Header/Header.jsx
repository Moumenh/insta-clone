import React from 'react'
import './Header.css'
import { Button } from '@material-ui/core';

const Header = ({signOut}) => {
    return (
        <div className='app__header'>
            <img className='app_headerImage'
                src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt='logo' />

            <div className='app__auth'>

                <Button onClick={signOut}>Sign Out</Button>
            </div>
        </div>
    )
}

export default Header