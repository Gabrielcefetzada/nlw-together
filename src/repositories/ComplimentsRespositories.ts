import { Repository, EntityRepository } from "typeorm"
import { Compliment } from "../entities/Compliments"

@EntityRepository(Compliment)
class ComplimentsRespositories extends Repository<Compliment> {

}

export { ComplimentsRespositories }