import './App.css';
import Header from './Components/Header';
import Discussion from "./Components/Discussion";
import MessageBox from "./Components/MessageBox";
import { useState } from 'react';

function App() {
  const [selectedChat, setSelectedChat] = useState("Alice");

  return (
    <div className="components">
      <Header />
      <div className="components">
        <Discussion onSelectChat={setSelectedChat} />
        <MessageBox selectedChat={selectedChat} /> 
      </div>
    </div>
  );
}

export default App;
