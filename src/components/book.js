function Book({ book }){
	return(
		<div key={book.id}>
			<h1> {book.name} </h1>
            <h2> {book.description} </h2>
         </div>
	);
}

export default Book;