import { useState } from 'react';
import { TextField, Button } from '@mui/material';

function TodoForm({onAdd}){

    const [text, setText] = useState("");

    
    
    
    return (
        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <TextField
                onChange={e => {
                    setText(e.target.value);
                }}
                value={text}
                label="What has to be done?" 
                id="standard-basic" 
                variant="standard"
                />
            <Button 
            className="button"
            disabled={text === ""}
            onClick={e => {
                e.preventDefault();
                if(text !== ""){
                    onAdd(text);
                    setText("");
                }
            }} 
            sx={{
                margin: "16px 0 0 0",
                width: "20px",
                height: "32px",
                color: "#73D45D",
            }}>Add</Button>
        </form>
    )
}

export default TodoForm;