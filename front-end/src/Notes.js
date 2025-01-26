import { useEffect, useState } from "react";
import { getNotes } from "./API";

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const data = await getNotes();
            setNotes(data);
          };
          fetchItems();
    }, []);

    const newNote = (e) => {
        e.preventDefault();
    
        const note = new FormData(e.target);
        const payload = Object.fromEntries(note);
    
        setNotes([...notes, payload]);
        console.log("NOTES", notes);
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
                    <li key={index}>{note.notes}</li>
                )}
                </ul>
            </div>
        </div>
    )
}

export default Notes;