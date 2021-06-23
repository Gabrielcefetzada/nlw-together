import { Entity, EntityRepository, Repository } from "typeorm"
import { User } from '../entities/User'

@EntityRepository(User)
class UsersRepositories extends Repository<User> { // ao dar o extends eu tenho acesso aos metodos do Repository
    
}

export { UsersRepositories } 