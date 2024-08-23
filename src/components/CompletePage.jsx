import { useState, useEffect } from "react";
import axios from "axios";
import BookForm from "./BookForm";
import BookList from "./BookList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function CompletePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
    const token = localStorage.getItem("token");
    if (token) {
      // Optionally fetch user data based on token
    }
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("https://book-listing-backend-s0dh.onrender.com/books");
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addBook = (book) => {
    setBooks([...books, book]); // Add the new book to the list
    toast.success("Book added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const updateBookList = (updatedBooks) => {
    setBooks(updatedBooks);
  };

 

  console.log(books);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ToastContainer />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Book Listing Platform
        </h1>
        <div className=" rounded-lg p-6 mb-8">
          <BookForm onAddBook={addBook} />
        </div>
        <div className="rounded-lg p-6">
          <BookList books={books} setBooks={updateBookList} />
        </div>
        <div className="text-center mt-8 text-[2rem]">
          <Link
            to="/listing"
            state={{ books }} // Passing books as state
            className="text-blue-500 hover:underline"
          >
            Browse all books for{" "}
            <span className="text-orange-500">MATCHING</span> and{" "}
            <span className="text-orange-500">EXCHANGING</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompletePage;
