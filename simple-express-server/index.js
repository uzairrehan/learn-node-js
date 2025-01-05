import express from "express";

const app = express();
const PORT = 4000;

// Middleware function
function middleware(req, res, next) {
  console.log("Middleware executed!");
  next(); // Proceed to the next middleware or route handler
}

// Route with middleware
app.get("/", middleware, (req, res) => {
  res.send("Hello to the first API");
});

// Route with URL parameter (id)
app.get("/:id", (req, res) => {
  res.send(`Hello, ${req.params.id}`);
});

// Route with query parameter
app.get("/greet", (req, res) => {
  res.send(`Hi, ${req.query.name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Explanation:
// Middleware: The middleware function logs a message each time a request hits the / route. It uses next() to allow the request to proceed to the next handler.

// URL Parameters:

// The /:id route uses a dynamic URL parameter (id). For example, /123 would respond with "Hello, 123".
// Query Parameters:

// The /greet route expects a query parameter. For example, /greet?name=Uzair would respond with "Hi, Uzair".
// To test:

// Visit http://localhost:4000/ to see "Hello to the first API".
// Visit http://localhost:4000/John to see "Hello, John".
// Visit http://localhost:4000/greet?name=Uzair to see "Hi, Uzair".