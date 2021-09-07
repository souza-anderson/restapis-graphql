const express = require('express')
const productsController = require('../controllers/productsController')
const router = express.Router()


router.delete('/:id', productsController.remove)

router.put('/:id', productsController.put)

router.patch('/:id', productsController.patch)

router.get('/:id', productsController.getById)

router.get('/', productsController.getAll)

router.post('/', productsController.create)

module.exports = router