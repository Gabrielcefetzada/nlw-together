import { getCustomRepository } from "typeorm"
import { ComplimentsRespositories } from "../repositories/ComplimentsRespositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface ComplimentsRequestInterface {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message} : ComplimentsRequestInterface){
        const complimentsRespositories = getCustomRepository(ComplimentsRespositories)

        const userRepositories = getCustomRepository(UsersRepositories)

        if(user_receiver === user_sender){
            throw new Error("The users can't send to theirself")
        }
        const userReceiverExists = await userRepositories.findOne({id: user_receiver})

        if(!userReceiverExists) {
            throw new Error("User receiver does not exist")
        }

        const compliment = complimentsRespositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRespositories.save(compliment)
        return compliment

    }
}

export { CreateComplimentService }