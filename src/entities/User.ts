import { Column, Entity, OneToMany } from "typeorm";
import { Model } from "./Model";
import { Post } from "./Post";

@Entity()
export class User extends Model {
  @Column({
    default: "user",
  })
  role: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    default: true,
  })
  active: boolean;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
