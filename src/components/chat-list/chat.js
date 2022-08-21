import React, { useState } from "react";
import styled from "@emotion/styled";
import { List, ListItem } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import chatStyle from './chat.module.css'

const ItemList = styled(ListItem)`
  // flex-wrap: wrap;
  flex-direction: column;
  cursor: pointer;
  color: #fff;
  background-color: #2c2c2c;
  border-bottom: 1px solid #000;
  align-items: flex-start;
`;



export const ChatList = () => {
  const [chatList, setChatList] = useState([{ name: "First-Chat", id: Date.now(), date: new Date().toLocaleString() }, { name: "First-Chat", id: Date.now(), date: new Date().toLocaleString() }]);
  // const setCurrentChatList = () => {
  //   setChatList([
  //     ...chatList,
  //     { name: "ChatName", id: Date.now(), date: new Date().toLocaleString() },
  //   ]);
  // };

  return (
    <>
      <List>
        {chatList.map((chat, index) => (
          <ItemList className={chatStyle.listItem} key={index} >
            <div className={chatStyle.istItem__wrap}>
              <p className={chatStyle.listItem__name}>{chat.name}</p>
              <CommentIcon />
            </div>
            <p>{chat.date}</p>
          </ItemList>
        ))}
      </List>
    </>);
};
