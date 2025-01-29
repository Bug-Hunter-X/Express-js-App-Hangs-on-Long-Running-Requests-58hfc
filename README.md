# Express.js Hanging Request Bug

This repository demonstrates a common issue in Express.js applications where long-running requests can cause the application to appear unresponsive or hang.  The problem is highlighted in `bug.js` and a solution is provided in `bugSolution.js`.

**Problem:**
The server introduces an artificial 5-second delay before sending the response. If a client's request timeout is set lower than 5 seconds, the client will timeout and consider the request failed, even though the server eventually sends the response.

**Solution:**
The solution uses stream to prevent hanging on long running tasks.  The server now sends the response promptly, indicating that the process has begun, and then the long-running task happens in the background, while the connection is freed up.