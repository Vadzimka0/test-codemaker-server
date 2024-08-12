import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUser1723477793513 implements MigrationInterface {
  name = 'SeedUser1723477793513';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (1, '2024-08-01', 'user1cinema', 2, 'confirmed', 'JPY', '0', '40')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (2, '2024-08-02', 'user2cinema', 2, 'active', 'CAD', '191', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (3, '2024-08-03', 'user3cinema', 3, 'inactive', 'CAD', '80', '10')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (4, '2024-08-04', 'user4cinema', 1, 'confirmed', 'EUR', '110', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (5, '2024-08-05', 'user5cinema', 1, 'idle', 'USD', '150', '20')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (6, '2024-08-06', 'user6cinema', 2, 'confirmed', 'JPY', '0', '40')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (7, '2024-08-07', 'user7cinema', 2, 'active', 'CAD', '90', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (8, '2024-08-08', 'user8cinema', 3, 'inactive', 'USD', '780', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (9, '2024-08-09', 'user9cinema', 1, 'confirmed', 'EUR', '130', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (10, '2024-08-10', 'user10cinema', 1, 'idle', 'USD', '450', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (11, '2024-08-11', 'user11cinema', 2, 'confirmed', 'EUR', '610', '40')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (12, '2024-08-10', 'user12cinema', 2, 'active', 'CAD', '490', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (13, '2024-08-09', 'user13cinema', 3, 'confirmed', 'GBP', '80', '50')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (14, '2024-08-08', 'user14cinema', 1, 'confirmed', 'EUR', '30', '50')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (15, '2024-08-07', 'user15cinema', 1, 'idle', 'USD', '450', '50')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (16, '2024-08-11', 'user16cinema', 2, 'confirmed', 'EUR', '20', '10')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (17, '2024-08-10', 'user17cinema', 2, 'active', 'CAD', '225', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (18, '2024-08-09', 'user18cinema', 3, 'idle', 'JPY', '85', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (19, '2024-08-08', 'user19cinema', 1, 'inactive', 'EUR', '35', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (20, '2024-08-07', 'user20cinema', 1, 'idle', 'USD', '510', '50')`,
    );
  }

  public async down(): Promise<void> {}
}
