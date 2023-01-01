import { Column, Entity, ManyToOne } from "typeorm";
import { Model } from "./Model";
import { User } from "./User";

@Entity()
export class Post extends Model {
  @Column({
    type: "varchar",
    length: 20,
  })
  title: string;

  @Column()
  image: string;

  @Column({
    length: 2000,
  })
  content: string;

  @Column({ type: "jsonb", default: [] })
  likes: JSON;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
