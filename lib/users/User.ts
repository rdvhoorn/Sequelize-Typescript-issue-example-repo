import {Model, Table, Column, HasMany, DataType} from 'sequelize-typescript';

import {Post} from '../posts/Post';

@Table
export class User extends Model {

  @Column({type: DataType.STRING(128)})
  name!: string;

  @HasMany(() => Post)
  posts: Post[];

}
