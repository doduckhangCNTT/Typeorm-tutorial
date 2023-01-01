import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";
import { join } from "path";
import { config } from "dotenv";
import { User } from "./entities/User";
import { Video } from "./entities/Video";
import { Post } from "./entities/Post";
import { Room } from "./entities/Room";
import { Subject } from "./entities/Subject";
import { Category } from "./entities/Category";
import { viewGetCategories } from "./entities/view/viewGetCategories";

config();
const post = process.env.DB_PORT as unknown | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: post as number,
  username: "postgres",
  password: "4568527931",
  database: "typeormDb",
  synchronize: false,
  logging: false,
  // ssl:
  //   process.env.NODE_ENV === "production"
  //     ? { rejectUnauthorized: false }
  //     : false,
  // entities: ["src/**/**.entity{.ts,.js}"],
  // migrations: ["src/migrations/**/*{.ts,.js}"],

  entities: [`${__dirname}/**/entities/**/*.{ts, js}`],
  // entities: [User, Post, Video, Room, Subject, Category, viewGetCategories],
  migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
  subscribers: ["src/subscriber/**/*{.ts,.js}"],
  // typeorm migration:create ./src/migrations/CategoryRefactoring
  // "migration:generate": "typeorm-ts-node-commonjs -d ./src/data-source.ts migration:generate ./src/migrations/default",

  // entities: ["dist/entities/**/*{.js,.ts}"],
  // migrations: ["dist/migrations/**/*{.js,.ts}"],
  // subscribers: ["dist/subscribers/**/*{.js,.ts}"],

  // entities:
  //   process.env.NODE_ENV === "production"
  //     ? ["dist/entities/**/*.js"]
  //     : [join(__dirname, "./entities/**/*.ts")],
  // migrations:
  //   process.env.NODE_ENV === "production"
  //     ? ["dist/migrations/**/*.js"]
  //     : [join(__dirname, "./migrations/**/*.ts")],
});
