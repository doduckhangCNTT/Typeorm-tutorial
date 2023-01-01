import { MigrationInterface, QueryRunner } from "typeorm";

export class abc1672547024780 implements MigrationInterface {
    name = 'abc1672547024780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" RENAME COLUMN "title" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" RENAME COLUMN "name" TO "title"`);
    }

}
