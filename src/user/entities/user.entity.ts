import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  // @PrimaryGeneratedColumn('increment')
  // id: number;

  // @CreateDateColumn()
  // register_at: Date;

  // @Column()
  // login: string;

  // @Column({ type: 'int' })
  // main_group: number;

  // @Column({ length: 16 })
  // status: 'idle' | 'active' | 'inactive' | 'confirmed';

  // @Column({ length: 3 })
  // currency: 'USD' | 'EUR' | 'GBP' | 'CAD' | 'JPY';

  // @Column({ type: 'decimal', precision: 7, scale: 2, default: 0.0 })
  // balance: number;

  // @Column({ type: 'decimal', precision: 7, scale: 2, default: 0.0 })
  // bonus_balance: number;

  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column('varchar', { length: 255, unique: true, default: null })
  email: string;

  @Column('varchar', { length: 128, unique: true, default: null })
  login: string;

  @Column('varchar', { length: 60, default: null })
  pass: string;

  @Column('tinyint', { default: 0 })
  status: number;

  @Column('tinyint', { default: 0 })
  kyc_status: number;

  @Column('tinyint', { default: 0 })
  group: number;

  @Column('varchar', { length: 36, unique: true, default: null })
  token: string;

  @Column('varchar', { length: 3, default: null })
  currency: string;

  @Column('varchar', { length: 128, default: null })
  remember_token: string | null;

  @Column('bigint', { default: 0 })
  balance: number;

  @Column('bigint', { default: 0 })
  bonus_balance: number;

  @Column('bigint', { default: 0 })
  wager_amount: number;

  @Column('bigint', { default: 0 })
  wager_need: number;

  @Column('bigint', { default: 0 })
  wager_bet_min: number;

  @Column('bigint', { default: 0 })
  wager_bet_max: number;

  @Column('int', { default: 0 })
  freespins_number: number;

  @Column('bigint', { default: 0 })
  freespins_bet_amount: number;

  @Column('varchar', { length: 2, default: null })
  country: string;

  @Column('varchar', { length: 2, default: null })
  lang: string;

  @Column('tinyint', { default: 0 })
  verified_email: number;

  @Column('timestamp')
  date_reg: Date;

  @Column('timestamp', { default: null })
  date_last_activity: Date;

  // @ManyToOne(() => Currency)
  // currencyEntity: Currency;

  // @ManyToOne(() => Group)
  // groupEntity: Group;
}
