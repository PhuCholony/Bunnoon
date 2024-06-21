import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'genres' })
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 34, unique: true })
  pk!: string;

  @Column({ length: 34 })
  enName!: string;

  @Column({ length: 34 })
  thName!: string;
}
