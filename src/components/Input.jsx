import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function Input(props){

  const [isExpanded, setExpanded] = useState(false);

  const [text, setText] = useState({
    title: "",
    content: ""
  });

 
  function handleChange(event){
    const {name, value} = event.target;
     setText(prevValue => {
       return {
         ...prevValue,
         [name]: value
       }
     })
  }

  function expand(){
    setExpanded(true);
    }

        
     return (
            <div>
            <form className="create-note">
            {isExpanded && (<input onChange={handleChange} value={text.title} name="title" placeholder="Title"  />)}
            <textarea onChange={handleChange} onClick={expand} value={text.content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
            <Zoom in={isExpanded}>
            <Fab onClick={(event) => { props.onClick(text);
            setText({
              title: "",
              content: ""
            });
            event.preventDefault();}} >
              <AddIcon />
            </Fab>
            </Zoom>
            </form>
            </div>
          )     
                  
}

export default Input;