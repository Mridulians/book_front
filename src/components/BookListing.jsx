import { useLocation } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookListing() {
  const location = useLocation();
  const { books } = location.state || { books: [] }; // Default to empty array if no books
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = [
    "All",
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

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const handleSendRequest = () => {
    toast.success("Request sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ToastContainer />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          All Books
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Genre Filter */}
        <div className="flex justify-center mb-8">
          <select
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Book List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book._id}
                className="bg-white shadow-custom-darkgray rounded-lg p-6"
              >
                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                <p className="text-gray-700 mb-1">{book.author}</p>
                <p className="text-gray-500">{book.genre}</p>
                <p className="text-black">Created By: {book.createdBy}</p>

                <button
                  onClick={handleSendRequest}
                  className="p-[10px] text-black bg-green-400 rounded-[10px] font-bold font-sans mt-[2rem]"
                >
                  Send Request
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No books found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookListing;
