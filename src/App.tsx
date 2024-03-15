import "./App.css";
import Note from "./components/note/note";
import { Notes } from "./components/note/data.";
function App() {
  return (
    <div className="App">
      <h2>Notes App</h2>
      {Notes.map((note) => (
        <Note key={note.id} priority={note.priority} text={note.text} />
      ))}
    </div>
  );
}

export default App;
