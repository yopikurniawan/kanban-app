console.log('start in routing task');
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task')
const Authorization = require('../middlewares/authorization')

router.get('/', TaskController.show)
router.post('/', TaskController.create)

router.use('/:id', Authorization.task)
router.patch('/:id', TaskController.move)
router.put('/:id', TaskController.edit)
router.delete('/:id', TaskController.delete)
  
module.exports = router
console.log('end in routing task');