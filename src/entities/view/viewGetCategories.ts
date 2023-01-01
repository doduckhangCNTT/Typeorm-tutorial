import { ViewEntity, ViewColumn, DataSource } from "typeorm";
import { Category } from "../Category";

@ViewEntity({
  expression: (dataSource: DataSource) =>
    dataSource
      .createQueryBuilder()
      .select("category.id", "id")
      .addSelect("category.name", "name")
      .from(Category, "category"),
})
export class viewGetCategories {
  @ViewColumn()
  id: string;

  @ViewColumn()
  name: string;
}
