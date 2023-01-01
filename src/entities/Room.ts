import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subject } from "./Subject";
import { Video } from "./Video";

@Entity("rooms")
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "text",
  })
  name: string;

  @Column({ type: "text" })
  description: string;

  @OneToMany(() => Video, (video) => video.room)
  videos: Video[];

  @ManyToMany(() => Subject, (subject) => subject.rooms, {
    eager: true,
    cascade: true,
  })
  subjects: Subject[];

  addSubject(subject: Subject) {
    console.log("subject: ", subject);
    if (this.subjects == null) {
      this.subjects = new Array<Subject>();
    }
    this.subjects.push(subject);

    console.log("Subjects: ", this.subjects);
  }
}
