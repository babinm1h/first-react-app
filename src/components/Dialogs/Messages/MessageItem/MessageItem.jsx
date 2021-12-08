import React from 'react';

const MessageItem = (props) => {
    return (
        <div className="messages_item">
            <div className="message_text">{props.messageText}</div>
        </div>
    );
};

export default MessageItem;