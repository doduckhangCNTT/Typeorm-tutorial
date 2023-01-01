import { Column, Entity, Tree, TreeChildren, TreeParent } from "typeorm";
import { Model } from "./Model";

@Entity()
@Tree("nested-set")
// @Tree("closure-table")
// @Tree("materialized-path")
export class Category extends Model {
  @Column()
  name: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;
}
