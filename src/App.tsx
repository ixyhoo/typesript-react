import { useRef } from "react";


const App = () => {
  const inputMessage = useRef<HTMLInputElement>(null);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    inputMessage.current.value = '';
// logique d'envoie de données

  };

  return (
    <div>
      <h2>Poster un message</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='entrez un message' id="inputMessage" ref={inputMessage}/>
        <input type="submit" />
      </form>
      <h2>Liste des messages</h2>
      <div></div>
    </div>
  );
};

export default App;
