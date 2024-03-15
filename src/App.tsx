import "./App.css";
import Note from "./components/notes/notes";

function App() {
  return (
    <div className="App">
      <h2>Notes App</h2>
      <Note priority="low" text="this is test note" />
    </div>
  );
}

export default App;
