import { Checkbox, Button } from '@mui/material';

function TodoItem({todo, onChange, onDelete}){
    return (
        <div>
            <label className="item">
                <div>
                {/* <input type="checkbox" checked={todo.isCompleted} onChange={e => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }} />
                 */}
                <Checkbox 
                    checked={todo.isCompleted} 
                    defaultChecked
                    onChange={e => {
                        onChange({
                            ...todo,
                            isCompleted: e.target.checked
                        });
                    }}
                    sx={{
                        color: "green",
                        ":checked": {
                            color: "green",
                        },
                    }}
                />
                <p>{todo.text}</p>
                </div>
                <Button onClick={() => {
                    onDelete(todo);
                }}
                sx={{
                    width: "20px",
                    height: "32px",
                    color: "#D45D5D",
                }}
                >Delete</Button>
            </label>
        </div>
    )
}

export default TodoItem;