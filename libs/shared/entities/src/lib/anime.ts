import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { GenreEntity } from './genre';

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

  @ManyToOne(() => GenreEntity, (relation) => relation.animes, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'genre_id' })
  genre!: GenreEntity | number;
}
