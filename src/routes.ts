import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const router = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createAuthenticationController = new AuthenticateUserController()

router.post("/tags", ensureAdmin, createTagController.handle) // esse método tem implicitamente request e response
router.post("/users", createUserController.handle) // esse método tem implicitamente request e response
router.post("/login", createAuthenticationController.handle) // esse método tem implicitamente request e response

export { router }