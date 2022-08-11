import React, { useState, useEffect } from 'react';
import './Message.css';

export const Message = ({ msg }) => {
  return (

    <div className="message">
      <h2>{msg.author}</h2>
      <div>{msg.message}</div>
      <div>{msg.date}</div>
    </div>
  );
}



export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = () => {
    if (value) {
      setMessageList([
        ...messageList,
        { author: "User", message: value, date: new Date().toLocaleString() },
      ]);
      setValue("");
    }
  }

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId;

    if (messageList.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", message: "Hello from Bot", date: new Date().toLocaleString() },
        ]);
      }, 2500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList]);

  return (
    <>
      <div>
        {messageList.map(msg => (
          <Message msg={msg} />
        ))}
      </div>

      <input placeholder="Введите сообщение..." value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={sendMessage} >Отправить</button>
    </>
  );

}
