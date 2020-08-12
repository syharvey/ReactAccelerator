import React, { useState } from "react";
import SideBarNote from "./SideBarNote";
import "../app2.css";

function NoteList() {
  const [notes] = useState([
    { name: "Note #1", date: "7/16/20" },
    { name: "Note #2", date: "7/18/20" },
  ]);

  return (
    <article className="NoteList" align="center">
      <div align="left">
        {notes.map((note, index) => {
          return (
            <SideBarNote
              name={note.name}
              date={note.date}
              click={() => this.deletePersonHandler(index)}
              key={note.id}
            />
          );
        })}
      </div>
    </article>
  );
}

export default NoteList;
