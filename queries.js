// 1. Find all books in a specific genre 
db.books.find({ genre: "Adventure" });

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } });  //(after 2010)

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "Dune" },
  { $set: { price: 12.99 } }
);  // (change "Dune" to $12.99)

// 5. Delete a book by its title 
db.books.deleteOne({ title: "The Hobbit" });
