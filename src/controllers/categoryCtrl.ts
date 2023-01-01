import { Request, Response } from "express";
import { Category } from "../entities/Category";
import {
  CategoryRepository,
  categoryRepository,
} from "../repositories/categoryRepository";
import { viewGetCategories } from "../entities/view/viewGetCategories";

const categoryCtrl = {
  createCategory: async (req: Request, res: Response) => {
    try {
      const { name, parentCategory } = req.body;

      console.log({ name, parentCategory });
      const newCategory = categoryRepository.create({ name });

      if (parentCategory) {
        const categoryParent: Category = await CategoryRepository.findByName(
          parentCategory
        );
        newCategory.parent = categoryParent;
      }

      await categoryRepository.save(newCategory);
      res.json(newCategory);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  getAllCategory: async (req: Request, res: Response) => {
    try {
      // const categories: Category[] = await CategoryRepository.find();
      // const categoryTrees = await CategoryRepository.manager
      //   .getTreeRepository(Category)
      //   .findTrees();

      // Test View
      const categoryTrees = await categoryRepository.manager.findOneBy(
        viewGetCategories,
        { id: "e70f4b55-802a-48c3-87d7-9450d654f215" }
      );
      res.json(categoryTrees);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  getCategoryByName: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const existCategory = await CategoryRepository.findByName(name);
      // const category: Category = await CategoryRepository.findByName(name);
      const categoryTree: Category = await categoryRepository.manager
        .getTreeRepository(Category)
        .findAncestorsTree(existCategory);

      res.json(categoryTree);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  deleteCategory: async (req: Request, res: Response) => {
    try {
      const { id } = req.body;
      await Category.createQueryBuilder()
        .delete()
        .from(Category)
        .where("id = :id", { id: id })
        .execute();

      res.json({ msg: "Delete category successfully" });
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },
};

export default categoryCtrl;
