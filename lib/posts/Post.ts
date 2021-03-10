import {Model, Table, Column, ForeignKey, BelongsTo, DataType} from 'sequelize-typescript';

import {User} from '../users/User';

@Table
export class Post extends Model {

  @Column({type: DataType.STRING(128)})
  public text!: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  public userId!: number;

  @BelongsTo(() => User)
  public user: User;
}
