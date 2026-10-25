import React from 'react'

const User = ({ name, isLoggedIn }) => {
    return (
        <div>
            <h2>{name}</h2>
            {isLoggedIn ? (
                <p>Welcome Back!</p>
            ) : (<p>Please Login!</p>)
            }
        </div>
    )
}

export default User