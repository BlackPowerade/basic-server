const http = require("http")

const server = http.createServer((request, response) => {
    response.end("Hello, Galvanize!")
  })

  server.listen(9000, 'localhost', () => {
    console.log(`Server is running on http://localhost:9000/`)
  })
