import React from 'react'
import { OptionalMessage } from '../../styles/General'

const Message = ({ message }) => {
    return (
        <OptionalMessage>
            <p> {message} </p>
        </OptionalMessage>
    )
}

export default Message