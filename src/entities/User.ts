import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid' // lib para gerar numeros aleatórios dos meus ids

@Entity("users") // nome da minha tabela referenciada
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { User }
