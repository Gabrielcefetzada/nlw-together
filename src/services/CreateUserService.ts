import { getCustomRepository } from "typeorm"
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from "bcryptjs"

// REGRAS DE NEGÓCIO 

interface UserRequestInterface {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

class CreateUserService { 
    async execute({name, email, admin = false, password} : UserRequestInterface){
        const usersRepository = getCustomRepository(UsersRepositories)

        if(!email) {
            throw new Error("Email passed is incorrect.")
        }
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            password: passwordHash,
            admin
        })

        await usersRepository.save(user)
        return user;
    }
}

export { CreateUserService } 