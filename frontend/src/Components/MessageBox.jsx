import React, { useState } from "react";

export default function MessageBox(){
  const [message, setMessage] = useState(""); // État pour le message
  const [messages, setMessages] = useState([ // État pour stocker les messages
    { text: "Salut ! Comment ça va ?", sender: "Alice" },
    { text: "Ça va bien, merci ! Et toi ?", sender: "Moi" },
    { text: "Tout va bien ! Quoi de neuf ?", sender: "Alice" },
  ]);

  const handleChange = (event) => {
    setMessage(event.target.value); // Met à jour l'état avec le texte saisi
  };

  const handleSend = () => {
    // Ajoute le nouveau message à la liste des messages
    setMessages([...messages, { text: message, sender: "Moi" }]);
    setMessage(""); // Réinitialise le champ de saisie
  };

  return (
    <div className="chat-window">
      <div className="chat-title-container">
        <h2 className="chat-title">Conversation avec Alice</h2>
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
};
