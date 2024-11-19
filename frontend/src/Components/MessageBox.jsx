import React, { useState, useEffect } from "react";

// Cache pour stocker les discussions déjà récupérées
const messageCache = {};

export default function MessageBox({ selectedChat }) {
  const [messages, setMessages] = useState([]); // Messages de la discussion active
  const [message, setMessage] = useState(""); // Message en cours d'écriture
  const [isLoading, setIsLoading] = useState(true); // Indique si les données sont en cours de chargement

  // Charge les messages lorsqu'une nouvelle discussion est sélectionnée
  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);

      // Si la discussion est déjà dans le cache, l'utiliser
      if (messageCache[selectedChat]) {
        setMessages(messageCache[selectedChat]);
        setIsLoading(false);
        return;
      }

      // Sinon, effectuer le fetch
      try {
        const response = await fetch('/src/data/discussions.json'); // Charge toutes les discussions
        const data = await response.json();
        const chatMessages = data[selectedChat] || []; // Récupère les messages pour la discussion active
        messageCache[selectedChat] = chatMessages; // Stocke les données dans le cache
        setMessages(chatMessages);
      } catch (error) {
        console.error("Erreur lors du chargement des messages :", error);
        setMessages([]); // Définit un état vide en cas d'erreur
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [selectedChat]); // Recharge les messages à chaque changement de discussion

  // Ajoute un message localement et dans le cache
  const handleSend = () => {
    if (message.trim() === "") return;

    const newMessage = { text: message, sender: "Moi" };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages); // Met à jour l'état local
    messageCache[selectedChat] = updatedMessages; // Met à jour le cache
    setMessage(""); // Réinitialise le champ de saisie
  };

  return (
    <div className="chat-window">
      <div className="chat-title-container">
        <h2 className="chat-title">Conversation avec {selectedChat}</h2>
      </div>
      <div className="message-container">
        {isLoading ? (
          <p>Chargement des messages...</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`${msg.sender === "Moi" ? "sent" : "received"}`}
            >
              <p>{msg.text}</p>
            </div>
          ))
        )}
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
