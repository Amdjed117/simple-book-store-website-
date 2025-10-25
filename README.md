# BookStore Project

This is a MERN (MongoDB, Express, React, Node.js) stack project for managing a bookstore. The application allows users to create, view, edit, and delete books.

## Features

- **Frontend**: Built with React and Vite for a fast and modern user interface.
- **Backend**: Powered by Express.js and MongoDB for robust API and database management.
- **CRUD Operations**: Create, Read, Update, and Delete books.
- **Responsive Design**: Optimized for various screen sizes.

## Project Structure

```
bookStore-project/
├── Backend/
│   ├── config.js
│   ├── index.js
│   ├── package.json
│   ├── Models/
│   │   └── bookModel.js
│   └── Routes/
│       └── bookRoute.js
├── Frontend/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── assets/
│       ├── components/
│       │   ├── BackButton.jsx
│       │   ├── BookCard.jsx
│       │   ├── BookModal.jsx
│       │   ├── BookSingleCard.jsx
│       │   ├── BooksTable.jsx
│       │   └── Spinner.jsx
│       └── pages/
│           ├── CreateBook.jsx
│           ├── DeleteBook.jsx
│           ├── EditBook.jsx
│           ├── Home.jsx
│           └── ShowBook.jsx
```

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the `Backend` folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `config.js` file with the following content:
   ```javascript
   export const PORT = 5555;
   export const mongoDBURL = "your-mongodb-connection-string";
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `Frontend` folder:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to the frontend development server (usually `http://localhost:5173`).
2. Use the application to manage books.

## Deployment

To deploy the application, you can use platforms like Heroku for the backend and Vercel/Netlify for the frontend. Ensure the backend URL is correctly configured in the frontend.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Vite](https://vitejs.dev/)
