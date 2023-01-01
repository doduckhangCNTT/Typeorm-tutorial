import express from "express";
import userCtrl from "../controllers/userCtrl";

const router = express.Router();

router.post("/user", userCtrl.createUser);

router.get("/users", userCtrl.getUsers);

router.route("/user/:id").put(userCtrl.updateUser).delete(userCtrl.deleteUser);

export default router;
