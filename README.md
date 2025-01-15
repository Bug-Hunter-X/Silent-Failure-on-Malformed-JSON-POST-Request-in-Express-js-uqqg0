# Silent Failure on Malformed JSON POST Request in Express.js

This repository demonstrates a common but easily overlooked error in Express.js applications: silent failure when handling malformed JSON in POST requests.  The provided code lacks proper error handling, resulting in unexpected behavior when the server receives invalid JSON data.

## Bug Description

The `bug.js` file shows a simple Express.js server that accepts POST requests to `/user`.  It expects a JSON payload containing user data.  However, it does not handle cases where the request body is empty, not JSON, or contains invalid JSON.  This results in the server silently failing without providing any error indication.

## Solution

The `bugSolution.js` file demonstrates a corrected version with appropriate error handling. It uses `try...catch` blocks to handle JSON parsing errors and sends appropriate error responses to the client when necessary. 

## How to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `node bug.js`. 
4. Send a malformed POST request (e.g., an empty body, or a body that is not valid JSON) to `http://localhost:3000/user` using a tool like Postman or curl.  Observe that there is no error response.
5. Repeat steps 2-4 with `bugSolution.js` to see the improved error handling.