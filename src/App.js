import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Chat from "./Chat.js";
import Users from "./User.js";
import React, { useState, useEffect } from "react";
import socketClient from "socket.io-client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
const SERVER = "http://localhost:9000";
const socket = socketClient(SERVER);
function App() {
  const [uname, setUname] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  useEffect(() => {
    setUname(prompt("What is your name?"));

    socket.on("chat-message", (data) => {
      console.log(`${data.name}: ${data.message}`);
      setChat((x) => [...x, `${data.name}: ${data.message}`]);
    });
  }, []);
  useEffect(() => {
    socket.emit("new-user", uname); 
  }, [uname]);
  const sendHandler = (e) => {
    e.preventDefault();
    socket.emit("send-chat-message", message);
    setChat((x) => [...x, `${uname}: ${message}`]);
    setMessage("");
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="App">
      <Container>
        <div>
          <Users user={uname} />
        </div>
        <div>
          <Chat chat={chat} uname={uname} />
        </div>
        <div>
          <Form onSubmit={sendHandler}>
            <Form.Row>
              <Col>
                <Form.Control
                  type="text"
                  value={message}
                  onChange={messageChangeHandler}
                ></Form.Control>
              </Col>
              <Col xs="auto">
                <Button>SEND</Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default App;
