import React from 'react';

type MessageItemProps = {
    messageText: string
}

const MessageItem: React.FC<MessageItemProps> = (props) => {
    return (
        <div className="messages_item">
            <div className="message_text">{props.messageText}</div>
        </div>
    );
};

export default MessageItem;