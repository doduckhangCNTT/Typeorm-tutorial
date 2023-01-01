import express from "express";
import categoryCtrl from "../controllers/categoryCtrl";

const router = express.Router();

router.post("/category", categoryCtrl.createCategory);

router.get("/categories", categoryCtrl.getAllCategory);

router.get("/nameCategory", categoryCtrl.getCategoryByName);

router.delete("/category", categoryCtrl.deleteCategory);

export default router;
