import React from 'react'
import Avatar from '@material-ui/core/Avatar';


import './Post.css'

const Post = ({post}) => {

    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar className='post__avatar'
                    alt='Avatar'
                    src={post.avatar}
                />
                <h3> {post.username} </h3>
                {/* Header --> avatar + username */}
            </div>


            <img className='post__image' src={post.imgUrl} />
            {/* image */}

            <h4 className='post__text'> <strong>{post.username}</strong> : {post.caption}</h4>
            {/* username + caption */}
        </div>
    );
}

export default Post;