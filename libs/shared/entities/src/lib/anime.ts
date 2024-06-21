import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'animes' })
export class AnimeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, unique: true })
  pk!: string;

  @Column({ length: 50 })
  enName!: string;

  @Column({ length: 50 })
  thName!: string;
}
