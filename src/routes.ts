import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'

const router = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.post("/users", createUserController.handle) // esse método tem implicitamente request e response
router.post("/tags", createTagController.handle) // esse método tem implicitamente request e response

export { router }