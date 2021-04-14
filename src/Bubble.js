import React from "react";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
const Bubble = ({ chat, uname }) => {
  return (
    <div align="left">
      {chat
        ? chat.map((x) => (
            <h3 align={x.includes(`${uname}:`) ? "right" : "left"}>
              <Badge
                variant={x.includes(`${uname}:`) ? "primary" : "secondary"}
              >
                <Form.Label>{x}</Form.Label>
              </Badge>
            </h3>
          ))
        : null}
    </div>
  );
};

export default Bubble;
