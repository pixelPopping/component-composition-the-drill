import { collection } from "./collection";
import { useState } from "react";

export default function App() {
  const [books, setBooks] = useState(collection); // Initialize books with the collection

  const borrowBook = (id) => {
    // Update the state by removing a borrowed book
    const updatedBooks = books.filter((book, index) => index !== id);
    setBooks(updatedBooks); // Update the state with new list of books
  };

  const returnBook = (returnedBook) => {
    // Add the returned book back to the collection
    const updatedBooks = [...books, returnedBook];
    setBooks(updatedBooks); // Update the state
  };

  return (
    <div className="App">
      <h1>Prop Drilling and Component Composition</h1>
      <div>
        {/* Map through the books and display them */}
        {books.map((book, id) => (
          <div key={id}>
            <span>{book.title}</span>
            <button onClick={() => borrowBook(id)}>Borrow</button>
          </div>
        ))}
      </div>
    </div>
  );
}
