import { useState } from "react";

function Notes() {
    const [notes, setNotes] = useState([]);

    const newNote = (e) => {
        e.preventDefault();
    
        const note = new FormData(e.target);
        const payload = Object.fromEntries(note);
    
        setNotes([...notes, payload]);
      }

    return (
        <div>
            <form onSubmit={newNote}>
                <textarea type='text' rows='3' name='notepad'></textarea>
                <button type='submit'>Add Note</button>
            </form>
            <div>
                <ul>
                {notes.map((note, index) => 
                    <li key={index}>{note.notepad}</li>
                )}
                </ul>
            </div>
        </div>
    )
}

export default Notes;