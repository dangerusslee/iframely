// lambda_handler.js
import serverless from 'serverless-http';
import app from './app.js'; // app.js exports the express app

// Initialize serverless-http with the Express app
const handler = serverless(app);

// Export the handler for AWS Lambda
export { handler };
