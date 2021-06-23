import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624396135869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { // fazer a migration/tabela
        await queryRunner.createTable (
            new Table({ 
                name: "users",
                columns: [
                    { 
                        name: "id",
                        type: "uuid", // chave unica
                        isPrimary: true 
                    },
                    { 
                        name: "name",
                        type: "varchar"
                    },
                    { 
                       name: "email",
                       type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> { // desfazer a migration/tabela
        await queryRunner.dropTable("users")
    }

}
