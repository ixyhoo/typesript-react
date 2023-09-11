import { useRef, useState } from "react";


const App = () => {
  const inputMessage = useRef<HTMLInputElement>(null);
  const [messData, setMessData] = useState([]);
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
  
// logique d'envoie de données
    (document.getElementById("inputMessage") as HTMLInputElement).value = "";
  };

  return (
    <div>
      <h2>Poster un message</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='entrez un message' id="inputMessage" ref={inputMessage}/>
        <input type="submit" />
      </form>
      <h2>Liste des messages</h2>
      <div>{messData}</div>
    </div>
  );
};

export default App;
