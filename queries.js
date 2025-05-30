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

// Advanced Queries

// 1. Find books that are in stock and published after 2010 and Use projection to return only title, author, and price:
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { _id: 0, title: 1, author: 1, price: 1 }
);

// 2. Sort books by price
// Ascending (Lowest to Highest):
db.books.find(
  {},
  { _id: 0, title: 1, author: 1, price: 1 }
).sort({ price: 1 });

// Descending (Highest to Lowest):
db.books.find(
  {},
  { _id: 0, title: 1, author: 1, price: 1 }
).sort({ price: -1 });

// 3. Pagination — 5 books per page
//Use limit and skip:

// Page 1 → skip(0)

//Page 2 → skip(5)

//Page 3 → skip(10)

// Page 1 (books 1–5)
db.books.find(
  {},
  { _id: 0, title: 1, author: 1, price: 1 }
).skip(0).limit(5);

// Page 2 (books 6–10)
db.books.find(
  {},
  { _id: 0, title: 1, author: 1, price: 1 }
).skip(5).limit(5);

// Aggregation Pipeline
// 1. Calculate the Average Price of Books by Genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 2. Find the Author with the Most Books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      totalBooks: { $sum: 1 }
    }
  }
]);

// 3. Group Books by Publication Decade and Count Them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 } // to organize chronologically
  }
]);

// Indexing
// 1. Create an Index on title
db.books.createIndex({ title: 1 }); // ascending order

// 2. Create a Compound Index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 }); // author ascending, year descending

// 3. Use explain() to Compare Query Performance
db.books.find({ title: "1984" }).explain("executionStats");
Look for executionStats.totalDocsExamined — higher means slower.



