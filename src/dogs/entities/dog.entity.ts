import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
  //implements AuditI ??
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  color: string;

  @Column()
  age: number;

  @ManyToOne(() => User, (user) => user.id, { eager: true }) //ondelete: cascade => para que me dehe borrar (va a borrar ambos)
  owner: User;
}
