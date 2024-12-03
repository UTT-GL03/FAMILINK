import React, { useEffect, useState } from 'react';

export default function Discussion({ onSelectChat }) {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const fetchDiscussion = async () => {
      const documentId = '3ff75a3f085fac81d045a3fede001fa9'; // L'ID de ton document spécifique

      try {
        // Récupère le document spécifique avec son ID
        const response = await fetch(`http://localhost:5984/familink/${documentId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        const discussionsList = [];

        // Vérifie si le document a des discussions et extrait les noms
        for (const sender in data) {
          if (sender !== '_id' && sender !== '_rev') {
            discussionsList.push(sender);
          }
        }

        setDiscussions(discussionsList); // Mets à jour l'état avec les discussions extraites
      } catch (error) {
        console.error('Error fetching discussion:', error);
      }
    };

    fetchDiscussion();
  }, []); // Le tableau vide [] signifie que ce useEffect ne s'exécute qu'une seule fois après le premier rendu

  const handleDisc = (event) => {
    const senderName = event.currentTarget.querySelector('.chat-sender');
    if (senderName) {
      onSelectChat(senderName.textContent); // Met à jour la discussion sélectionnée
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title-container">
        <h2 className="sidebar-title">Discussions</h2>
      </div>

      {/* Afficher dynamiquement les discussions récupérées */}
      {discussions.map((sender, index) => (
        <div onClick={handleDisc} className="chat-box" key={index}>
          <p className="chat-sender">{sender}</p>
          <p className="chat-message">Dernier message...</p>
          <p className="chat-time">"2024-10-15T14:00:00Z"</p>
        </div>
      ))}
    </div>
  );
}
