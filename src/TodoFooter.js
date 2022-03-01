import { Button } from '@mui/material';


function TodoFooter({todos, onClearCompleted}){

    const completedSize = todos.filter(todo => todo.isCompleted).length;
    return (
        <div className="footer">
            <h4>{completedSize}/{todos.length} Completed</h4>
            <Button disabled={completedSize === 0} className="button" onClick={onClearCompleted}>Clear Completed</Button>
        </div>
    )
}

export default TodoFooter;