import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryColumn()
  text: string;
  @Column()
  imageurl: string;
}
