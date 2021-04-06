# 06-file-server

## HTTP Static File Server

Create a node server that serves files from a public directory.

If a user hits your server at http://localhost:7890/index.html your server should go into the public directory and find an index.html file, read it, and send the contents as a response. If no file is found respond with a Not Found message.

- write a test to check /index.html and error
- write code that sends index.html content as a response
- pass tests
- refactor if necessary