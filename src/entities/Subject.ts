import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Room } from "./Room";

@Entity("subjects")
export class Subject {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @ManyToMany(() => Room, (room) => room.subjects)
  @JoinTable({
    name: "roomSubject",
    joinColumn: {
      name: "subject_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "room_id",
      referencedColumnName: "id",
    },
  })
  rooms: Room[];
}
