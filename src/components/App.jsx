import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Input from "./Input";



function App() {

    const [notes, setNotes] = useState([]);

    function addItem(text){
        setNotes((prevItems) => {
            return [...prevItems, text];
          });       
    }

    function deleteItem(id){
        setNotes(prevValues => {
            return prevValues.filter((item, index) => {
                return index !== id;
            })
        })
}

    return(
        <div>
        <Header />
        <Input onClick={addItem} />
        {notes.map((note, index) => (
            <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteItem} />
          )     
        )}   
       
       <Footer />
        </div>
    )
}

export default App;
