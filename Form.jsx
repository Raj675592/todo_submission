import { useState } from 'react';

function Form({ addTodo }) {
const [input, setInput] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
addTodo(input);
setInput('');
};
{/* <h1>WELCOME! PLEASE ADD SOME TASKS</h1> */}

return (

<form onSubmit={handleSubmit}>
<h1>WELCOME! PLEASE ADD SOME TASKS</h1>
<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Add a new task"
/>

<button type="submit" >Add</button>
</form>
);
}
export default Form;