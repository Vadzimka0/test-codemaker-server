import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1723488796975 implements MigrationInterface {
    name = 'CreateUser1723488796975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "register_at" TIMESTAMP NOT NULL DEFAULT now(), "login" character varying NOT NULL, "main_group" integer NOT NULL, "status" character varying(16) NOT NULL, "currency" character varying(3) NOT NULL, "balance" numeric(7,2) NOT NULL DEFAULT '0', "bonus_balance" numeric(7,2) NOT NULL DEFAULT '0', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
