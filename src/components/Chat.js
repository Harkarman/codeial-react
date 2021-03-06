import React, { Component } from "react";
import "../chat.css";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [], // {content: 'some message', self: true/false}
      typedMessage: "",
    };
  }
  render() {
    const { typedMessage, messages } = this.state;
    return (
      <div className="chat-container">
        <div className="chat-header">Chat</div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              className={
                messages.self
                  ? "chat-bubble self-chat"
                  : "chat-bubble other-chat"
              }
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={typedMessage}
            onChange={(e) => this.setState({ typedMessage: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <div></div>
      </div>
    );
  }
}
