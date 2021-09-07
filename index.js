const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')
const graphqlServer = require('./graphql')
const app = express()

app.use(bodyParser.json())

// rest
app.use(routes)


app.listen(3000, err => {
  if (err) {
    console.log('Not possible listen on port 3000')
  } else {
    graphqlServer.start()
      .then(() => {
        // graphql
        graphqlServer.applyMiddleware({ app })
        console.log('Server running on port 3000')
      }).catch((err) => console.log('Not possible listen on port 3000'))
  }
})