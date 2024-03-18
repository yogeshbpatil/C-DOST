export type Priority = "high" | "medium" | "low";
export type NoteProps = {
    text: string;
    priority? :Priority;
  };

  export type NoteType = {
    id: string;
    text: string;
    priority?: Priority
  };
  // time 11.10 or restart