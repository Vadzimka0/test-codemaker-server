import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUser1723477793513 implements MigrationInterface {
  name = 'SeedUser1723477793513';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (1, '2024-08-01', 'user1casino', 2, 'confirmed', 'JPY', '0', '40')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (2, '2024-08-02', 'user2casino', 2, 'active', 'CAD', '191', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (3, '2024-08-03', 'user3casino', 3, 'inactive', 'CAD', '80', '10')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (4, '2024-08-04', 'user4casino', 1, 'confirmed', 'EUR', '110', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (5, '2024-08-05', 'user5casino', 1, 'idle', 'USD', '150', '20')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (6, '2024-08-06', 'user6casino', 2, 'confirmed', 'JPY', '0', '40')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (7, '2024-08-07', 'user7casino', 2, 'active', 'CAD', '90', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (8, '2024-08-08', 'user8casino', 3, 'inactive', 'USD', '780', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (9, '2024-08-09', 'user9casino', 1, 'confirmed', 'EUR', '130', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (10, '2024-08-10', 'user10casino', 1, 'idle', 'USD', '450', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (11, '2024-08-11', 'user11casino', 2, 'confirmed', 'EUR', '610', '40')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (12, '2024-08-10', 'user12casino', 2, 'active', 'CAD', '490', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (13, '2024-08-09', 'user13casino', 3, 'confirmed', 'GBP', '80', '50')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (14, '2024-08-08', 'user14casino', 1, 'confirmed', 'EUR', '30', '50')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (15, '2024-08-07', 'user15casino', 1, 'idle', 'USD', '450', '50')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (16, '2024-08-11', 'user16casino', 2, 'confirmed', 'EUR', '20', '10')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (17, '2024-08-10', 'user17casino', 2, 'active', 'CAD', '225', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (18, '2024-08-09', 'user18casino', 3, 'idle', 'JPY', '85', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (19, '2024-08-08', 'user19casino', 1, 'inactive', 'EUR', '35', '0')`,
    );
    await queryRunner.query(
      `INSERT INTO users ( id, register_at, login, main_group, status, currency, balance, bonus_balance ) 
      VALUES (20, '2024-08-07', 'user20casino', 1, 'idle', 'USD', '510', '50')`,
    );
  }

  public async down(): Promise<void> {}
}
