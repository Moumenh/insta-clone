import React from 'react'
import { Input, Button } from '@material-ui/core';


import './UploadForm.css'

const UploadForm = ({ handleClick, handleChange, username, avatar, imgUrl, caption }) => {

    return (
        <div className='upload'>
            <form className='app__signup'>
                <Input

                    placeholder='username'
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChange }
                />
                <Input

                    placeholder='Avatar'
                    type='text'
                    name='avatar'
                    value={avatar}
                    onChange={handleChange}
                />
                <Input

                    placeholder='Image Link'
                    type='text'
                    name='imgUrl'
                    value={imgUrl}
                    onChange={handleChange}
                />
                <Input

                    placeholder='caption'
                    type='text'
                    name='caption'
                    value={caption}
                    onChange={handleChange}
                />

                <Button type='submit'
                    onClick={handleClick}
                > Upload</Button>
            </form>
        </div>
    );
}

export default UploadForm;