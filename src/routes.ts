import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'

const router = Router()
const createUserController = new CreateUserController()

router.post("/users", createUserController.handle) // esse método tem implicitamente request e response

export { router }