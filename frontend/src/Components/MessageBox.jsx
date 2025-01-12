import React, { useState, useEffect, useRef } from "react";

const messageCache = {};

export default function MessageBox({ selectedChat }) {
  const [messages, setMessages] = useState([]); 
  const [message, setMessage] = useState(""); 
  const [isLoading, setIsLoading] = useState(true); 
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedChat) return;

      setIsLoading(true);

      if (messageCache[selectedChat]) {
        setMessages(messageCache[selectedChat]);
        setIsLoading(false);
        scrollToBottom();
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5984/familink/_design/newDesignDoc/_view/chat?include_docs=true&start_key=%5B%22Momo%22%2C%20%22${selectedChat}%22%5D&end_key=%5B%22Momo%22%2C%20%22${selectedChat}%22%2C%7B%7D%5D&reduce=false&limit=5&descending=false`
        );
        const data = await response.json();
        const chatMessages = data.rows.map((row) => ({
          text: row.doc.messages,
          sender: row.doc.from,
          time: row.doc.time,
        }));

        setMessages(chatMessages);
        messageCache[selectedChat] = chatMessages;
      } catch (error) {
        console.error("Erreur lors du chargement des messages :", error);
        setMessages([]);
      } finally {
        setIsLoading(false);
        scrollToBottom();
      }
    };

    fetchMessages();
  }, [selectedChat]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (message.trim() === "") return;

    const newMessage = { text: message, sender: "Momo", time: new Date().toISOString() };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    messageCache[selectedChat] = updatedMessages; 
    setMessage(""); 
  };

  return (
    <div className="chat-window">
      <div className="chat-title-container">
        <h2 className="chat-title">Conversation avec {selectedChat}</h2>
      </div>
      <div className="message-container" style={{ overflowY: "auto", maxHeight: "400px" }}>
        {isLoading ? (
          <p>Chargement des messages...</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`${msg.sender === "Momo" ? "sent" : "received"}`}
            >
              <p><strong>{msg.sender}:</strong> {msg.text}</p>
              <small>{new Date(msg.time).toLocaleString()}</small>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tapez votre message..."
          className="input-field"
        />
        <button onClick={handleSend} className="send-button">
          Envoyer
        </button>
      </div>
    </div>
  );
}
