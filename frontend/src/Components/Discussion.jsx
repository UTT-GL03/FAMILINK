export default function Discussion({ onSelectChat }){
    const handleDisc = (event) => {
        // Change de discussion
        const senderName = event.currentTarget.querySelector('.chat-sender');
        if (senderName) {
            onSelectChat(senderName.textContent); // Met à jour le nom de la discussion sélectionnée
        }
    };

    return(
        <div className="sidebar">
            <div className="sidebar-title-container">
                <h2 className="sidebar-title">Discussions</h2>
            </div>
            <div onClick={handleDisc} className="chat-box" id="0">
                <p className="chat-sender">Solal Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>
            <div onClick={handleDisc} className="chat-box" id="1">
                <p className="chat-sender">Alexis Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>
            <div onClick={handleDisc} className="chat-box" id="2">
                <p className="chat-sender">Alexis Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>
            <div onClick={handleDisc} className="chat-box" id="3">
                <p className="chat-sender">Alexis Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>
            <div onClick={handleDisc} className="chat-box" id="4">
                <p className="chat-sender">Alexis Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>
            <div onClick={handleDisc} className="chat-box" id="5">
                <p className="chat-sender">Alexis Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>
            <div onClick={handleDisc} className="chat-box" id="6">
                <p className="chat-sender">Alexis Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>
            <div onClick={handleDisc} className="chat-box" id="7">
                <p className="chat-sender">Alexis Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>
            <div onClick={handleDisc} className="chat-box" id="8">
                <p className="chat-sender">Alexis Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>
            <div onClick={handleDisc} className="chat-box" id="9">
                <p className="chat-sender">Alexis Carroll</p>
                <p className="chat-message">Ut condimentum blandit.</p>
                <p className="chat-time">"2024-10-15T14:00:00Z"</p>
            </div>

        </div>
    );
}