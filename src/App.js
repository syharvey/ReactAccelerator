import React, { useState } from "react";
import "./app2.css";
import Note from "./components/Note.js";
import SideBarNote from "./components/SideBarNote.js";
import { ThemeProvider, CSSReset, Button } from "@chakra-ui/core";

function App() {
  const myNotes = [
    {
      name: "Note #1",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed feugiat turpis, a hendrerit turpis. Fusce semper bibendum consectetur. Nunc volutpat diam lacinia, fringilla ex non, congue justo. Donec nibh arcu, commodo quis lorem sit amet, gravida consectetur nulla.",
      date: "Fri Aug 7 2020",
      id: "f3h4f",
    },
    {
      name: "Note #2",
      body:
        "Donec commodo faucibus sem sit amet congue. Aenean luctus turpis tellus, eu feugiat libero faucibus non. Vestibulum blandit sed erat sit amet rhoncus. Cras vulputate, est non efficitur scelerisque, nisi mi gravida justo, in pellentesque nisi felis ut nisi. Phasellus dictum tincidunt libero. Etiam gravida mattis arcu. Ut pulvinar nibh sed tellus scelerisque, sed scelerisque dolor gravida. Nullam nunc ante, convallis nec ultricies eget, hendrerit eget purus. Nulla ultrices elementum velit, vitae egestas ligula tristique nec. Nulla ac mattis nulla. Suspendisse non ligula libero. Fusce iaculis eleifend ante eu dictum.",
      date: "Tue Aug 3 2020",
      id: "jwef9",
    },
  ];
  const [notes, setNotes] = useState(myNotes);
  const [currentNote, setCurrentNote] = useState(myNotes[0]);

  const handleCreateNote = () => {
    let prevNotes = [...notes];
    const len = prevNotes.length + 1;
    const today = new Date();
    prevNotes.push({
      name: "Note #" + len,
      body: "Click 'Edit Note' and type note content",
      date: today.toDateString(),
    });
    setNotes(prevNotes);
  };

  const deleteNoteHandler = (event) => {
    let newNotes = notes.filter((n) => n.name !== event.target.value);
    setNotes(newNotes);
    const today = new Date();
    if (notes.length === 0) {
      setCurrentNote({
        name: "Sample Note",
        body: "Click 'Edit Note' and type note content",
        date: today.toDateString(),
        id: "f3h4f",
      });
    } else {
      const firstNote = notes[0];
      setCurrentNote(firstNote);
    }
  };

  const handleSideBarClick = (note) => {
    setCurrentNote(note);
  };

  const handleBodyChange = (bodyValue, nameValue) => {
    let currentBody = "";
    const today = new Date();
    let i,
      index = 0;
    for (i = 0; i < notes.length; i++) {
      if (notes[i].name === nameValue) {
        index = i;
        i = notes.length;
      }
    }
    let newNotes = [...notes];
    newNotes[index].body = bodyValue;
    newNotes[index].date = today.toDateString();
    setNotes(newNotes);
  };

  return (
    <ThemeProvider>
      <CSSReset />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="sidebar" display="inline-block">
          <Button
            type="button"
            className="button block tertiary header-text"
            onClick={handleCreateNote}
            marginTop="10%"
          >
            Create Note
          </Button>
          {notes.map((note) => {
            return (
              <div onClick={() => handleSideBarClick(note)}>
                <SideBarNote
                  name={note.name}
                  date={note.date}
                  key={note.id}
                  value={note.name}
                />
              </div>
            );
          })}
        </div>
        <div display="inline-block">
          <Note
            name={currentNote.name}
            body={currentNote.body}
            date={currentNote.date}
            clickedDelete={deleteNoteHandler}
            handleBodyChange={handleBodyChange}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
