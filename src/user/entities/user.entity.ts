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

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  login: string;

  @Column()
  pass: string;

  @Column('tinyint')
  status: number;

  @Column('tinyint')
  kyc_status: number;

  @Column('tinyint')
  group: number;

  @Column({ unique: true })
  token: string;

  @Column('varchar', { length: 3 })
  currency: string;

  @Column('varchar', { length: 128 })
  remember_token: string | null;

  @Column('bigint', { nullable: true })
  balance: number;

  @Column('bigint', { nullable: true })
  bonus_balance: number;

  @Column('bigint', { nullable: true })
  wager_amount: number;

  @Column('bigint', { nullable: true })
  wager_need: number;

  @Column('bigint', { nullable: true })
  wager_bet_min: number;

  @Column('bigint', { nullable: true })
  wager_bet_max: number;

  @Column('int', { nullable: true })
  freespins_number: number;

  @Column('bigint', { nullable: true })
  freespins_bet_amount: number;

  @Column('varchar', { length: 2, nullable: true })
  country: string;

  @Column('varchar', { length: 2, nullable: true })
  lang: string;

  @Column('tinyint', { nullable: true })
  verified_email: number;

  @Column('timestamp')
  date_reg: Date;

  @Column('timestamp', { nullable: true })
  date_last_activity: Date;

  // @ManyToOne(() => Currency)
  // currencyEntity: Currency;

  // @ManyToOne(() => Group)
  // groupEntity: Group;
}
