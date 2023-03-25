const {
  addBookHandler,
  getBookHandler,
  getAllBookHandler,
  updateBooks,
  deleteBooks,
} = require("./handler.js");

const routes = [
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateBooks,
  },
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBooks,
  },
  {
    method: "GET",
    path: "/{any*}",
    handler: (request, h) => {
      return "Hello! The page you are looking for is not found";
    },
  },
];

module.exports = { routes };
