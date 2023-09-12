import { useRef, useState } from "react";
import { MessagesInt } from './model';
import Message from "./components/Message";


const App: React.FC = () => {
  const inputMessage = useRef<HTMLInputElement | null>(null);
  const [messData, setMessData] = useState<MessagesInt[]>([]);

  const handleSubmit = (e:any) => {
    e.preventDefault();
  
    if (inputMessage) {
    const mess:MessagesInt = { 
      id: Math.round(Math.random() * Date.now()),
      message: inputMessage.current?.value,
      date: Date.now()
    }
    setMessData((prevData) => [...prevData, mess]);
  }
// logique d'envoie de données
    (document.getElementById("inputMessage") as HTMLInputElement).value = "";
  }

  return (
    <div>
      <h2>Poster un message</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='entrez un message' id="inputMessage" ref={inputMessage}/>
        <input type="submit" />
      </form>
      <h2>Liste des messages</h2>
      <div>{messData?.map((mess) => (
        <Message mess={mess} messData={messData} setMessData={setMessData} key={mess.id}/>
        ))}</div>
    </div>
  );
};

export default App;
