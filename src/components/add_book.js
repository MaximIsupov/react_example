import { useState } from 'react';

function AddBook({setBooks}){
	
	const [name, setName] = useState();
	const [description, setDescription] = useState();

	function addBook(e) {
		e.preventDefault();
		setBooks((prev) => [...prev, {
			id: prev.length + 1,
			name,
			description,
		}])
	}
	
	return(
		  <form>
	        <input type='text' name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Название" />
	        <input type='text' name='description' value={description} onChange={e=>setDescription(e.target.value)} placeholder="Описание" />
	        <button type='submit' onClick={e => addBook(e)}>Создать</button>
	      </form>
	      )
}

export default AddBook