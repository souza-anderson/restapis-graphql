const { createProduct, getAllProducts } = require('./products')

const resolvers = {
  Query: {
    getAllProducts
  },
  Mutation: {
    createProduct
  }
}

module.exports = resolvers