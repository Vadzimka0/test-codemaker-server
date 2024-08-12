import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  register_at: Date;

  @Column()
  login: string;

  @Column({ type: 'int' })
  main_group: number;

  @Column({ length: 16 })
  status: 'idle' | 'active' | 'inactive' | 'confirmed';

  @Column({ length: 3 })
  currency: 'USD' | 'EUR' | 'GBP' | 'CAD' | 'JPY';

  @Column({ type: 'decimal', precision: 7, scale: 2, default: 0.0 })
  balance: number;

  @Column({ type: 'decimal', precision: 7, scale: 2, default: 0.0 })
  bonus_balance: number;
}
