import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { CreateComplimentController } from './controllers/CreateComplimentController'

const router = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createAuthenticationController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post("/tags", ensureAdmin, createTagController.handle) // esse método tem implicitamente request e response
router.post("/users", createUserController.handle) // esse método tem implicitamente request e response
router.post("/login", createAuthenticationController.handle) // esse método tem implicitamente request e response
router.post("/compliment", createComplimentController.handle) // esse método tem implicitamente request e response

export { router }