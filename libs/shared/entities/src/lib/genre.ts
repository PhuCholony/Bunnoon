import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AnimeEntity } from './anime';

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

  @OneToMany(() => AnimeEntity, (relation) => relation.genre)
  animes!: AnimeEntity | number;
}
