import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  //implements AuditI ??
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  color: string;

  // @Column()
  // nickname?: string;

  @Column()
  age: number;
}
