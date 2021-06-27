
import { Request, Response } from "express"
import { CreateComplimentService } from "../services/CreateComplimentService"

class CreateComplimentController {
    async handle(request: Request, response: Response){

        try { 
            const { tag_id, user_receiver, user_sender, message } = request.body
            const createComplimentService = new CreateComplimentService()
    
            const compliment = await createComplimentService.execute({
                tag_id,
                user_receiver,
                user_sender,
                message
            })
    
            return response.json(compliment)
        } catch (err) {
            return response.status(400).json({error: err.message})
        }
    }
}

export { CreateComplimentController }