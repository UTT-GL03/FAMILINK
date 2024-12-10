import { useEffect, useState } from 'react';

export default function Discussion({ onSelectChat }) {
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5984/familink/_design/newDesignDoc/_view/chat?start_key=%5B%22Momo%22%5D&end_key=%5B%22Momo%22%2C%20%7B%7D%20%5D&reduce=true&group=true')  
            .then(response => response.json())
            .then(data => {
                const noms = data.rows.map(x => x.key[1]);
                console.log(noms);
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
            {discussions.map((x, index) => (
                <div key={index} onClick={handleDisc} className="chat-box">
                    <p className="chat-sender">{x}</p>
                    <p className="chat-message">Message</p> {/* Message à ajouter plus tard */}
                    <p className="chat-time">2024</p> {/* Timestamp à ajouter plus tard */}
                </div>
            ))}
        </div>
    );
}
