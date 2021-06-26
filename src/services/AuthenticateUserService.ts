import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


interface AuthenticateRequestInterface {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password} : AuthenticateRequestInterface) {

        // verifica se email existe

        const usersRepository = getCustomRepository(UsersRepositories)
        const user = await usersRepository.findOne({email})

        if(!user) {
            throw new Error("Email or/and Password incorrect")
        }

        // verifica se a senha está correta

        const passwordMatch = await compare(password, user.password)
        if(passwordMatch === false){
            throw new Error("Email or/and Password incorrect")
        }

        // gerar token

        const token = sign({email: user.email}, "&G&44HIHeHsdod1UIREDTvfrfyTRYHYp[~874aWs", {subject: user.id, expiresIn: "1d"})
        return token

    }
}

export { AuthenticateUserService }