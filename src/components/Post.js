import React from 'react'
const Post = (props) => {
    return (
        <div className={props.className} key={props.id}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export { Post }