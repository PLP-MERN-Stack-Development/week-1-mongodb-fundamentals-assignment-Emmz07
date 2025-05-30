# MongoDB Bookstore Project

This project demonstrates how to work with MongoDB, including data insertion, querying, indexing, and aggregations using a `books` collection.

---

## Prerequisites

Make sure you have the following installed:

- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [MongoDB Compass (optional)](https://www.mongodb.com/try/download/compass)
- Mongo Shell (`mongosh`) or integrated shell in Compass

---

## Project Files

- `insert_books.js`: Script to insert multiple book documents
- `queries.js`: Contains various find and projection querie, Aggregation pipelines for analytics, Index creation and explain analysis
 

---

## How to Run the Scripts

1. **Start MongoDB** (if not already running):
   ```bash
   mongod
Open Mongo Shell:

bash
Copy
Edit
mongosh
Switch to your database:


use bookstore
Run the insert script:


load("insert_books.js")
Run queries and aggregations:
Create indexes and test performance:



### Script Descriptions
insert_books.js
Inserts 10+ book documents with fields like title, author, genre, price, and more.

queries.js
Find books by genre, author, or after a certain year

Use projections to return only specific fields

Implement pagination using limit() and skip()

Calculate average price per genre

Find the author with the most books

Group books by decade and count them

Create single and compound indexes

Use explain() to check query performance improvements

### Tips
Use MongoDB Compass to visualize your data


