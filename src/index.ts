import { AppDataSource } from "./data-source";
import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/api", routes);
console.log("Dirname: ", __dirname);
AppDataSource.initialize()
  .then(async () => {
    // const subject1 = new Subject();
    // subject1.name = "Application";
    // await AppDataSource.manager.save(subject1);

    // const subject2 = new Subject();
    // subject2.name = "Test2";
    // await AppDataSource.manager.save(subject2);

    // const room1 = new Room();
    // room1.name = "Room1";
    // room1.description = "bcd";
    // room1.subjects = [subject1, subject2];
    // await AppDataSource.manager.save(room1);

    app.listen(5500);
    console.log("Server is listening on port on ", 5500);
  })
  .catch((error) => console.log(error));

import { MigrationInterface, QueryRunner } from "typeorm";

// export class CategoryRefactoring1672493870524 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(
//       `ALTER TABLE "category" RENAME COLUMN "name" TO "title"`
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(
//       `ALTER TABLE "category" RENAME COLUMN "title" TO "name"`
//     );
//   }
// }
