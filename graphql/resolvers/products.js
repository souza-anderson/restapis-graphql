const getAllProducts = () => [{ id: '123', name: 'Anderson' }]

const createProduct = ( context, { input }) => {
  const { id, name  } = input
  return { id, name }
}

module.exports = {
  getAllProducts,
  createProduct
}