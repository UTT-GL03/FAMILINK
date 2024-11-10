import React, { useState } from "react";

export default function MessageBox({ selectedChat, messages, onSendMessage }) {
  const [message, setMessage] = useState(""); // État pour le message

  const handleChange = (event) => {
    setMessage(event.target.value); // Met à jour l'état avec le texte saisi
  };

  const handleSend = () => {
    // Ajoute le nouveau message à la liste des messages
    console.log("Message à envoyer :", message);

    // Appel de onSendMessage avec seulement le texte du message
    onSendMessage(message);
    setMessage(""); // Réinitialise le champ de saisie
  };

  return (
    <div className="chat-window">
      <div className="chat-title-container">
        <h2 className="chat-title">Conversation avec {selectedChat}</h2>
      </div>
      <div className="message-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${msg.sender === "Moi" ? "sent" : "received"}`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
        <div className="input-container">
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Tapez votre message..."
            className="input-field"
          />
          <button onClick={handleSend} className="send-button">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
