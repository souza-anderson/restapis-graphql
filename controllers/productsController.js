
const remove = (req, res) => {
  res.send({
    sucess: true,
    data: 'id'+req.params.id
  })
}

const put = (req, res) => {
  res.send({
    success: true,
    data: req.body
  })
}

const patch = (req, res) => {
  res.send({
    success: true,
    data: req.body
  })
}

const create = (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: req.body
  })
}

const getById = (req, res) => {
  res.send({
    success: true,
    data: 'id' + req.params.id
  })
}

const getAll = (req, res) => {
  res.send({
    products: ['all products']
  })
}

module.exports = {
  remove,
  put,
  patch,
  create,
  getById,
  getAll
}