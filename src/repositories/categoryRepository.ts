import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";

export const categoryRepository = AppDataSource.getRepository(Category);

export const CategoryRepository = AppDataSource.getRepository(Category).extend({
  async findByName(name: string) {
    return await this.createQueryBuilder("category")
      .select("category")
      .where("category.name = :name", { name: name })
      .getOne();
  },
});
