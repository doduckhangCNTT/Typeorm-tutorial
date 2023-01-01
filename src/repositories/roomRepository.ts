import { AppDataSource } from "../data-source";
import { Room } from "../entities/Room";

export const roomRepository = AppDataSource.getRepository(Room);

export const RoomRepository = AppDataSource.getRepository(Room).extend({
  async findByName(name: string) {
    console.log("Name: ", name);
    return await this.createQueryBuilder("room")
      .select("room")
      .where("room.name = :name", { name: name })
      .getMany();
  },
});
