import { useState } from "react";
import Book2 from './Something-I-Never-Told-You-SDL595765186-1-df466.jpg';
import Book1 from './41XVD5lLWXL._SX314_BO1,204,203,200_.jpg';
const books = [
  {
    id: 1,
    title: "Something I never told u",
    author: "Bhindra",
    publisher: "Pearson",
    release_year: "2020",
    image_url: Book2,
  },
  {
    id: 2,
    title: "pONNIYIN SELVAN",
    author: "Kalki",
    publisher: "Vikram",
    release_year: "2021",
    image_url: Book1,
  },
  {
    id: 3,
    title: "Something i wanted to tell u",
    author: "Bhindra",
    publisher: "Pearson",
    release_year: "2022",
    image_url: Book1,
  },
];

function Book() {
  const [yearFilter, setYearFilter] = useState("");
  const [publisherFilter, setPublisherFilter] = useState("All");

  const filter = books.filter((book) => {
    if (yearFilter !== "" && book.release_year !== yearFilter) {
      return false;
    }
    if (publisherFilter !== "All" && book.publisher !== publisherFilter) {
      return false;
    }
    return true;
  });

  const publisherOptions = ["All", "Pearson", "Vikram"];

  return (
    <div>
      <div>
        <label htmlFor="year"> Year:</label>
        <input
          id="year"
          type="text"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="publisher">Publisher:</label>
        <select
          id="publisher"
          value={publisherFilter}
          onChange={(e) => setPublisherFilter(e.target.value)}
        >
          {publisherOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filter.map((book) => (
          <li key={book.id}>
            <img src={book.image_url} alt={book.title} />
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Release Year: {book.release_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;