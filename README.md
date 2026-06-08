# Assignments Web Development

These assignments are **mandatory checkpoints** that verify your mastery of key concepts. Each assignment builds on the
previous one, progressively expanding your toolkit from JavaScript fundamentals to full-stack development.


## 📋 Submission Requirements (All Assignments)

**Standard workflow for all three assignments:**

1. Fork this repository
2. Clone your forked repository to your local machine
3. Write your solution and push commits to your fork
4. Open a Pull Request against the original repository

**Special notes:**

- You are allowed to use AI to do your assignments provided you understand the solution - your're learning this for yourself
- Code quality matters: clear variable names, no commented-out code, proper structure

---

## 📝 Assignment 1: Article Analyzer (Week 2)

**Skills you’ll practice:** String methods, arrays, objects, loops, data aggregation, regex basics

### Objective

Build a function that analyzes an article excerpt and returns key text metrics. This tests your ability to manipulate
strings, work with data structures and aggregate information—core skills you’ll use throughout the bootcamp.

### Requirements

**Input**

- Accept a single string representing an article paragraph
- Treat words case-insensitively (e.g., “Tech” and “tech” are the same)
- Ignore punctuation when tokenizing

**Processing**

- Split the text into words (letters/numbers only)
- Normalize whitespace

**Output** — your function must return an object with:

- `totalWords` → total word count
- `uniqueWords` → count of distinct words
- `averageWordLength` → average length of all words (round to 2 decimals)
- `top5Words` → array of the 5 most frequent words, each as `{word, count}`

### Guidance

- Use `.toLowerCase()` to normalize case
- Strip punctuation with a regex before splitting
- Use a `Map` or object to count word frequencies
- Calculate average: sum all word lengths, divide by `totalWords`
- Sort by count descending and take the first 5

### Test Your Solution

Use this text to verify your function works:

> The demand for individuals with tech skills is increasing. The good news is that you do not have to study IT to learn
> coding! We help you enter the Tech World – independent of your prior knowledge. Our Digital Shaper Program combines
> online learning, project work and community events to make learning as fun and easy as possible. As we believe that
> education should be free for everyone we are pleased to educate Techies in our four courses: Web Development, Data
> Science, Artificial Intelligence and UX-Design. We believe that these tracks are perfect to get started and enter the
> tech world. Sign up for our program beginning of each semester.

### Bonus Challenges (Recommended)

**Bonus 1:** Make “top N” configurable via a second parameter (default to 5)

**Bonus 2:** Accept command-line input instead of hardcoding strings

---

## 📝 Assignment 2: React UI fundamentals (Week 4)

**Skills you'll practice:** React components, state management (useState), props, controlled forms, list rendering,
conditional rendering

### Objective

Build a dynamic React frontend that displays and manages a list of learning resources. This assignment tests
your understanding of React fundamentals.

### Requirements

**Component Structure**

- Create at least 3 components: a main App/Container, a ResourceList and a ResourceCard
- Use `useState` to manage your resource list
- Start with a hardcoded array of resource objects in state
- Render one card per resource with proper `key` props

**Resource Card Display**
Each card should display:

- Resource title
- Category (e.g., "Frontend", "Backend")
- Rating (numeric, 0-5)
- A "⭐ Top Rated" badge if rating ≥ 4.5

**Empty State**

- If the resource list is empty, show a friendly message instead of blank space

**Add Resource Form**

- Create a form component with controlled inputs for: title, category (dropdown), rating
- On submit:
    - Add the new resource to state
    - Clear the form inputs
    - Render the new card immediately in the list
- Use `e.preventDefault()` to stop page refresh

### Guidance

- Use functional components with `useState` only (no class components)
- Pass data **down** via props; lift state to the parent component
- Controlled inputs: `value={state}` and `onChange={() => setState()}`
- Filter/display logic: use `.map()` for lists, conditional operators for badges/empty states

### Bonus Challenges

**Bonus 1:** Category Filter

- Add a dropdown at the top to filter cards by category ("All", "Frontend", "Backend", etc.)

---

## 📝 Assignment 3: Fundamentals REST API (Week 6)

**Skills you'll practice:** Node.js, Express, MongoDB, Mongoose, REST API design, CRUD operations, error handling

### Objective

Build a functional Node.js and Express backend connected to MongoDB. This assignment verifies you can design
REST endpoints, interact with a database and implement CRUD operations—everything you need for the MERN project.

### Requirements

**Project Setup**

- Initialize a Node.js project with Express
- Connect to MongoDB using Mongoose (local or MongoDB Atlas)

**Resource Model (Mongoose Schema)**
Define a `Resource` schema with:

- `title` — required string
- `category` — required string
- `rating` — number (default: 0)
- `completed` — boolean (default: false)

**REST API Endpoints**
Implement these four routes:

| Method | Endpoint             | Purpose                 |
|--------|----------------------|-------------------------|
| GET    | `/api/resources`     | Fetch all resources     |
| POST   | `/api/resources`     | Create a new resource   |
| PUT    | `/api/resources/:id` | Update a resource by ID |
| DELETE | `/api/resources/:id` | Delete a resource by ID |

**Response Format**

- Use proper HTTP status codes: `200 OK`, `201 Created`, `404 Not Found`, `500 Server Error`
- Return JSON responses, even for errors

### Guidance

- Use `express.json()` middleware to parse incoming JSON
- Test each endpoint with Postman or curl before connecting to the React frontend
- Handle missing resources gracefully (404 errors)
- For PUT requests, accept fields to update (title, rating, completed, etc.)

### Expected Behavior

**Creating a Resource:**

```
POST /api/resources
Body: { "title": "React Hooks Explained", "category": "Frontend" }

Response (201 Created):
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "React Hooks Explained",
  "category": "Frontend",
  "rating": 0,
  "completed": false
}
```

**Updating a Resource:**

```
PUT /api/resources/507f1f77bcf86cd799439011
Body: { "rating": 4.5 }

Response (200 OK): [updated resource object]
```

### Bonus Challenges (Recommended)

**Bonus 1:** Category Validation

- Add Mongoose `enum` validation so `category` only accepts: "Frontend", "Backend", "Data Science", "UX-Design"

**Bonus 2:** Error Middleware

- Create a global error handler that catches database errors and returns a clean 500 response instead of crashing

## Happy Coding ❤️
