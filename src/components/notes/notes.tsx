import "./notes.css";
type NoreProps = {
  text: string;
  priority?: "high" | "medium" | "low";
};
function Note(props: NoreProps) {
  return <div className={`note ${props.priority}`}>{props.text}</div>;
}
//DFDSF
export default Note;
