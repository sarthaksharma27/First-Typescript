// Import necessary modules
import express, { Request, Response } from 'express';

// Create an Express application
const app = express();
const port = 3000;

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express Server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
