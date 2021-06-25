import { Request, Response } from "express"
import { CreateTagService } from "../services/CreateTagService"

class CreateTagController {
    async handle(request: Request, response: Response){

        try { 
        const { name } = request.body
        const createTagService = new CreateTagService()

        const tag = await createTagService.execute(name)
        return response.json(tag)
         } catch (err) {
            return response.status(400).json({error: err.message})
         }
    }
}

export { CreateTagController } 