import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Exclude()
  @Column('varchar', { length: 255, unique: true, default: null })
  email: string;

  @Column('varchar', { length: 128, unique: true, default: null })
  login: string;

  @Exclude()
  @Column('varchar', { length: 60, default: null })
  pass: string;

  @Column('tinyint', { default: 0 })
  status: number;

  @Exclude()
  @Column('tinyint', { default: 0 })
  kyc_status: number;

  @Column('tinyint', { default: 0 })
  group: number;

  @Exclude()
  @Column('varchar', { length: 36, unique: true, default: null })
  token: string;

  @Column('varchar', { length: 3, default: null })
  currency: string;

  @Exclude()
  @Column('varchar', { length: 128, default: null })
  remember_token: string | null;

  @Column('bigint', { default: 0 })
  balance: number;

  @Column('bigint', { default: 0 })
  bonus_balance: number;

  @Exclude()
  @Column('bigint', { default: 0 })
  wager_amount: number;

  @Exclude()
  @Column('bigint', { default: 0 })
  wager_need: number;

  @Exclude()
  @Column('bigint', { default: 0 })
  wager_bet_min: number;

  @Exclude()
  @Column('bigint', { default: 0 })
  wager_bet_max: number;

  @Exclude()
  @Column('int', { default: 0 })
  freespins_number: number;

  @Exclude()
  @Column('bigint', { default: 0 })
  freespins_bet_amount: number;

  @Exclude()
  @Column('varchar', { length: 2, default: null })
  country: string;

  @Exclude()
  @Column('varchar', { length: 2, default: null })
  lang: string;

  @Exclude()
  @Column('tinyint', { default: 0 })
  verified_email: number;

  @Column('timestamp')
  date_reg: Date;

  @Exclude()
  @Column('timestamp', { default: null })
  date_last_activity: Date;

  // @ManyToOne(() => Currency)
  // currencyEntity: Currency;

  // @ManyToOne(() => Group)
  // groupEntity: Group;
}
