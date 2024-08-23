/* eslint-disable react/prop-types */

const BookCard = ({ book, onDelete, onEdit }) => {
  // console.log(book)
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 border-2 border-solid border-black">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-1">
        <strong>Author:</strong> {book.author}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Genre:</strong> {book.genre}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Created By:</strong> {book.createdBy}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => onEdit(book)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(book._id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
