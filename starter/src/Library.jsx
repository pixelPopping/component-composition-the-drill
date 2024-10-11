import { collection } from "./collection";
import useState from "react";

export default () => {
  const [books, setBooks] = useState(0);

  const borrowBook = () => {
    {
      collection.map((books, id) => {
        return <collection key={id} books={books} />;
      });
    }

    const returnBook = (id) => {};
    return (
      <div className="App">
        <h1>Prop Drilling and Component Composition</h1>
      </div>
    );
  };
};
