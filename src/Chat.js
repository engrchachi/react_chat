import React from "react";
import Card from "react-bootstrap/Card";
import Bubble from "./Bubble.js";
const Chat = ({ chat, uname }) => {
  return (
    <div align="left">
      <h2>CHAT: </h2>
      <Card>
        <Card.Body>
          <Bubble chat={chat} uname={uname} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chat;
