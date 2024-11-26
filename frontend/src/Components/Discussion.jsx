import { useEffect, useState } from 'react';

export default function Discussion({ onSelectChat }) {
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        fetch('/src/data/discussions.json')  
            .then(response => response.json())
            .then(data => {
                const noms = Object.keys(data);
                setDiscussions(noms); 
            })
            .catch(error => console.error('Erreur de chargement des discussions:', error));
    }, []);

    const handleDisc = (event) => {
        const senderName = event.currentTarget.querySelector('.chat-sender');
        if (senderName) {
            onSelectChat(senderName.textContent);  
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar-title-container">
                <h2 className="sidebar-title">Discussions</h2>
            </div>
            {discussions.map((nom, index) => (
                <div key={index} onClick={handleDisc} className="chat-box">
                    <p className="chat-sender">{nom}</p>
                    <p className="chat-message">Dernier message ici...</p> {/* Message à ajouter plus tard */}
                    <p className="chat-time">"2024-10-15T14:00:00Z"</p> {/* Timestamp à ajouter plus tard */}
                </div>
            ))}
        </div>
    );
}
