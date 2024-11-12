import './App.css'
import Header from './Components/Header';
import Discussion from "./Components/Discussion";
import MessageBox from "./Components/MessageBox";
import { useState } from 'react';

function App() {

  const [selectedChat, setSelectedChat] = useState("Alice");

  // Contenu de chaque discussion stocké par nom
  const [chatMessages, setChatMessages] = useState({
    "Alice": [
      { text: "Salut ! Comment ça va ?", sender: "Alice" },
      { text: "Ça va bien, merci ! Et toi ?", sender: "Moi" },
      { text: "Tout va bien ! Quoi de neuf ?", sender: "Alice" }
    ],
    "Solal Carroll": [
      { text: "Bonjour ! On se voit demain ?", sender: "Solal Carroll" },
      { text: "Oui, ça marche pour moi.", sender: "Moi" }
    ],
    "Alexis Carroll": [
      { text: "Salut ! J'ai besoin d'aide pour un projet.", sender: "Alexis Carroll" },
      { text: "D'accord, dis-moi ce dont tu as besoin.", sender: "Moi" }
    ],
  });

  // Fonction pour ajouter un message à la discussion en cours
  const addMessage = (text) => {
    console.log("Message à ajouter :", { text: text, sender: "Moi" });

    // Ajout du message uniquement avec le texte
    setChatMessages(prevChatMessages => ({
      ...prevChatMessages,
      [selectedChat]: [
        ...prevChatMessages[selectedChat],
        { text: text, sender: "Moi" } // Ajouter uniquement le message avec le texte
      ]
    }));
  };
  
  return (
    <div className="components">
      <Header />
      <div className="components">
        <Discussion onSelectChat={setSelectedChat} />
        <MessageBox
          selectedChat={selectedChat}
          messages={chatMessages[selectedChat]}
          onSendMessage={addMessage} // Passez la fonction addMessage
        />
      </div>
    </div>
  );
}

export default App;
