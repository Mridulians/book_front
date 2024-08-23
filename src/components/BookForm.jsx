/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const genres = [
    "Horror",
    "Romantic",
    "Finance",
    "Science Fiction",
    "Fantasy",
    "Thriller",
    "Mystery",
    "Biography",
    "Comedy",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, genre, createdBy };
    try {
      const res = await axios.post("https://book-listing-backend-s0dh.onrender.com/books", newBook);
      onAddBook(res.data); // Update the state in the parent component
      setTitle("");
      setAuthor("");
      setGenre("");
      setCreatedBy("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-custom-darkgray rounded-lg p-8 space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Add a New Book
      </h2>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
          Book Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the book title"
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="author"
        >
          Author
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter the author's name"
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="genre">
          Genre
        </label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="" disabled>Select a genre</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="createdBy">
          Created By
        </label>
        <input
          id="createdBy"
          type="text"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
